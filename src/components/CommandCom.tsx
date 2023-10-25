import { FC } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ISuggestion } from "@/lib/types";

interface Props {
  suggestions: ISuggestion[];
}

export const CommandComp: FC<Props> = ({ suggestions }) => {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput />

      <CommandList>
        {suggestions.map((suggestion) => (
          <CommandItem key={suggestion.id}>
            <span>{suggestion.name}</span>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
};
