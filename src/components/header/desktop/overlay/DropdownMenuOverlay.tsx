import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const DropdownMenuOverlay = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <DropdownMenu open={open} onOpenChange={setOpen}>
        {children}
      </DropdownMenu>
    </>
  );
};

export default DropdownMenuOverlay;
