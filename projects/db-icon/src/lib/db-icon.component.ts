import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DbIconName, DbIconProps, DbIconStyle, DbSvgDefinition, Size } from '@digibearapp/digibear-common-types';
import { NgDbIconContext } from './db-icon-context.service';
import { NgDigibearIconsRegistry } from './digibear-icons-registry.service';

@Component({
  selector: 'db-icon',
  templateUrl: './db-icon.component.html',
  styles: [
  ]
})
export class DbIcon implements OnInit, OnChanges {
  @Input() iconName!: DbIconName;
  @Input() iconStyle?: DbIconStyle;
  @Input() color?: string;
  @Input() secondaryColor?: string;
  @Input() opacity?: number;
  @Input() secondaryOpacity?: number;
  @Input() size?: Size;
  @Input() flippedH?: boolean;
  @Input() flippedV?: boolean;
  svg?: DbSvgDefinition;

  constructor(
    private registry: NgDigibearIconsRegistry,
    private iconContext: NgDbIconContext
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.svg = this.initSvg();
  }

  ngOnInit(): void { }

  initSvg() {
    if (this.iconName === undefined || this.iconName === null) {
      throw new Error("Attribute 'iconName' is required");
    }
    const dbIconProps: DbIconProps = {
      iconName: this.iconName,
      iconStyle: this.iconStyle ?? this.iconContext.iconStyle,
      color: this.color ?? this.iconContext.color,
      secondaryColor: this.secondaryColor ?? this.iconContext.secondaryColor,
      opacity: this.opacity ?? this.iconContext.opacity,
      secondaryOpacity: this.secondaryOpacity ?? this.iconContext.secondaryOpacity,
      size: this.size ?? this.iconContext.size,
      flippedH: this.flippedH ?? this.iconContext.flippedH,
      flippedV: this.flippedV ?? this.iconContext.flippedV
    };

    return this.registry.getIcon(dbIconProps)!;
  }

}