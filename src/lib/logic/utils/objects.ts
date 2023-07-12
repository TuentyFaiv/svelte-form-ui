import type { FieldInputForm } from "../typing/globals/interfaces.js";
import type { TextPropExplicit, TextsProp } from "../typing/globals/proptypes.js";

export function getTexts<T extends string>(texts: TextsProp<T>) {
  return function formatField<E extends string>(field: FieldInputForm<T, E>) {
    const textField = texts[field.name];
    const isShared = typeof textField === "string";

    return {
      ...field,
      label: isShared ? textField : (textField as TextPropExplicit).label,
      placeholder: isShared ? textField : (textField as TextPropExplicit).placeholder,
    };
  };
}
