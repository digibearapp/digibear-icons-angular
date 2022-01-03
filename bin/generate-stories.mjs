import fs from "fs";
import chalk from "chalk";
import * as paths from "./paths.mjs";
import * as constants from "./constants.mjs";
import { allIconsMap } from "../projects/db-icon/node_modules/@digibearapp/digibear-svg-icons/dist/esm/index.js";
import { prefixName } from "./utils.mjs";

export function generateDbStories() {
  const allNames = Object.keys(allIconsMap);
  let imports = allNames.map((name) => prefixName(name)).join(",\n\t\t");
  let options = allNames.map((key) => `"${key}"`).join(",\n\t\t\t\t");
  let fileLines = generateStoriesFileLines(imports, options);
  createStoriesFile(fileLines);
}

function generateStoriesFileLines(imports, options) {
  return `\
${constants.HEADER}
import { DbIcon } from '../projects/db-icon/src/lib/db-icon.component';
import { DbIconProps } from "../projects/db-icon/node_modules/@digibearapp/digibear-common-types";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { APP_INITIALIZER } from '@angular/core';
import { NgDigibearIconsRegistry } from 'projects/db-icon/src/public-api';
import { ${imports} } from "../projects/db-icon/node_modules/@digibearapp/digibear-svg-icons";

function initRegistryFactory(registry: NgDigibearIconsRegistry) {
	return () => registry.registerIcons([${imports}]);
}

const Template: Story<DbIconProps> = (args: DbIconProps) => ({
	components: DbIcon,
	props: args,
	moduleMetadata: {
		providers: [
			{
				provide: APP_INITIALIZER,
				useFactory: initRegistryFactory,
				multi: true,
				deps: [NgDigibearIconsRegistry]
			}
		]
	}
});

export default {
	title: 'Example/DbIcon',
	component: DbIcon,
	argTypes: {
		iconName: {
			options: [${options}],
			control: { type: 'select' },
		},
		iconStyle: {
			options: ['line', 'fill', 'duotone'],
			control: { type: 'radio' }
		},
		color: { control: 'color' },
		secondaryColor: { control: 'color' },
		opacity: { control: 'number' },
		secondaryOpacity: { control: 'number' },
		size: { control: 'number' },
		flippedH: { control: 'boolean' },
		flippedV: { control: 'boolean' },
	}
} as Meta;

export const Icon = Template.bind({});
Icon.args = {
	iconName: "watermelon",
	iconStyle: "line",
	color: "black",
	secondaryColor: "black",
	opacity: 1.0,
	secondaryOpacity: 0.16,
	size: 128.0,
	flippedH: false,
	flippedV: false,
};

`;
}

function createStoriesFile(fileLines) {
  try {
    fs.writeFileSync(paths.STORIES_PATH, fileLines);
    console.log(`${chalk.inverse.green(" DONE ")} DbIcon.stories.ts created.`);
  } catch (err) {
    console.error(
      `${chalk.inverse.red(" FAIL ")} Failed to create DbIcon.stories.ts.`
    );
    console.group();
    console.error(err);
    console.groupEnd();
    return;
  }
}
