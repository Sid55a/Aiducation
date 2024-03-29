"use client";

import { useModal } from "@/hooks/use-model-store";
import { IndianRupee, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ActionTooltip from "../action-tooltip";
import { Button } from "../ui/button";

interface PaymentModalProps {
  me: any;
  other: any;
}

export const Payment = ({ me, other }: PaymentModalProps) => {
  const { setAiChatSugg, onOpen, setRawQuery } = useModal();
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);
  const handleClick = () => {
    onOpen("payment", { me, other });
  };
  return (
    <>
      <div className="px-2">
        <ActionTooltip lable="Send Money">
          <Button
            onClick={handleClick}
            variant="ghost"
            size="icon"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 text-zinc-500 animate-spin my-4" />
            ) : (
              <IndianRupee className="h-5 w-5" />
            )}
          </Button>
        </ActionTooltip>
      </div>
    </>
  );
};
