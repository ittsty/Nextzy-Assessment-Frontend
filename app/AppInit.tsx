"use client";

import { useEffect } from "react";
import { useUserStore } from "@/stores/user.store";

export default function AppInit() {
  const initUser = useUserStore((s) => s.initUser);

  useEffect(() => {
    initUser();
  }, [initUser]);

  return null;
}
