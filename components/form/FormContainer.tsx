"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "@/components/ui/toast";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast.add({ description: state.message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
