import { Injectable } from '@angular/core';
import { DbIconDefinition, DbIconProps } from '@digibearapp/digibear-common-types';
import { DigibearIconsRegistry } from '@digibearapp/digibear-svg-core';

@Injectable({
  providedIn: 'root'
})
export class NgDigibearIconsRegistry {
  private registry = new DigibearIconsRegistry();
  
  public registerIcons(icons: DbIconDefinition[]) {
    this.registry.registerIcons(icons);
  }

  public getIcon(dbIconProps: DbIconProps) {
    return this.registry.getIcon(dbIconProps);
  }

  constructor() {}
}
