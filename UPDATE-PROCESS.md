# Update process

- Bump version number in package.json and in `package/db-icon/package.json`
- Update all dependencies to latest version
  —> double check newly updated versions
- Run `yarn` in the command line
- Run `cd ./projects/db-icon` in the command line
- Run `yarn` in the command line
- Run `cd ../..` in the command line
- Run `yarn generate-stories`
- Test `yarn storybook` or `ng run db-icon:storybook`
- Run `yarn build-db-icon`
- Run `cd ./dist/db-icon`
- Run `npm publish --access public`
- Run `cd ../..`
- Run `yarn publish-db-icon`
- Run `yarn update-git`
