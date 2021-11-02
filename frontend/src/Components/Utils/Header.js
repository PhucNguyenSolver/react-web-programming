import TestProductRow from "./TestProductRow";
import TestRowHeader from "./TestRowHeader";

export default function Header() {
  return (<>
    <h1 className="bg-secondary">This is a Header</h1>
    <TestRowHeader />
    <TestProductRow />
  </>);
}