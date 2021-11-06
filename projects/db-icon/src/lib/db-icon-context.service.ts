import { Injectable } from '@angular/core';
import { DbIconContextProps, DbIconStyle, Size } from '@digibearapp/digibear-common-types';

@Injectable({
  providedIn: 'root'
})
export class NgDbIconContext {
  private iconContext: DbIconContextProps;

  constructor() {
    this.iconContext = {};
  }

  setIconContext(iconContext: DbIconContextProps): void {
    this.iconContext = {
      iconStyle: iconContext.iconStyle ?? this.iconStyle,
      color: iconContext.color ?? this.color,
      secondaryColor: iconContext.secondaryColor ?? this.secondaryColor,
      opacity: iconContext.opacity ?? this.opacity,
      secondaryOpacity: iconContext.secondaryOpacity ?? this.secondaryOpacity,
      size: iconContext.size ?? this.size,
      flippedH: iconContext.flippedH ?? this.flippedH,
      flippedV: iconContext.flippedV ?? this.flippedV,
    }
  }

  get iconStyle(): DbIconStyle { return this.iconContext.iconStyle ?? "line"};
  get color(): string { return this.iconContext.color ?? "currentColor" };
  get secondaryColor(): string { return this.iconContext.secondaryColor ?? "currentColor" };
  get opacity(): number { return this.iconContext.opacity ?? 1.0 };
  get secondaryOpacity(): number { return this.iconContext.secondaryOpacity ?? 0.16 };
  get size(): Size { return this.iconContext.size ?? 128.0 };
  get flippedH(): boolean { return this.iconContext.flippedH ?? false };
  get flippedV(): boolean { return this.iconContext.flippedV ?? false };
}