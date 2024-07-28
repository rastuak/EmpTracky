import { useState } from "react";

import DashboardElement from "../components/ui/DashboardElement";

export default function MyInfoPage() {
  const [name, setName] = useState("");
  return (
    <DashboardElement>
      <h1>ini my info</h1>
    </DashboardElement>
  );
}
