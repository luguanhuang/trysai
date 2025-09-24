import { ControllerRenderProps } from "react-hook-form";
import { MarkdownEditor } from "../common/markdown-editor";
import { FormField } from "@/types/blocks/form";

export function Markdown({
  field,
  formField,
  data,
}: {
  field: FormField;
  formField: ControllerRenderProps<Record<string, unknown>, string>;
  data?: any;
}) {
  return (
    <MarkdownEditor
      value={formField.value as string}
      onChange={formField.onChange}
      placeholder={field.placeholder || ""}
      {...field.attributes}
    />
  );
}
