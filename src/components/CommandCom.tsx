import { FC } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ISuggestion } from "@/lib/types";
import useSelectedItemStore from "@/hooks/useSelectedItem";

interface Props {
  suggestions: ISuggestion[];
}

export const CommandComp: FC<Props> = ({ suggestions }) => {
  const { saveItem } = useSelectedItemStore();
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput />

      <CommandList>
        {suggestions.map((suggestion) => (
          <CommandItem
            key={suggestion.id}
            onClick={() => {
              saveItem(suggestion.name);
            }}
            className="cursor-pointer"
          >
            <span>{suggestion.name}</span>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
};
