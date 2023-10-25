import { useAutocompleteSuggestions } from "./hooks/useAutocompleteSuggestions";
import { ChevronDown, InfoIcon, MoreHorizontal, Plus } from "lucide-react";
import { Card, CardHeader } from "./components/ui/card";
import { CommandComp } from "./components/CommandCom";
import { DatePicker } from "./components/DatePicker";
import { Button } from "./components/ui/button";

function App() {
  const { isLoading, suggestions } = useAutocompleteSuggestions();

  if (!isLoading) {
    console.log(suggestions);
  }
  return (
    <main className="m-20">
      <Card className="">
        <CardHeader className="bg-slate-200 p-2">
          <div className="flex justify-between">
            <div className="flex gap-1">
              <ChevronDown />
              <h1 className="">New Formula (1)</h1>
            </div>
            <div className="flex gap-2">
              <InfoIcon />
              <MoreHorizontal />
            </div>
          </div>
        </CardHeader>
        <div className="px-2 py-4 bg-slate-100 flex justify-between items-center">
          <h4 className="text-2xl ml-5"> #Error</h4>

          <DatePicker />
        </div>
        <div className="px-4 py-8">
          {suggestions && <CommandComp suggestions={suggestions} />}
        </div>

        <div className="m-2 ">
          <Button variant="link" className="text-blue-400 text-xs py-0">
            <Plus className="text-blue-400" height={18} width={18} /> Add Time
            Segment
          </Button>
        </div>
      </Card>
    </main>
  );
}

export default App;
