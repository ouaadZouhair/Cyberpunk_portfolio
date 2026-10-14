"use client";

import { useLinkStatus } from "next/link";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

export default function LinkStatus() {
  const { pending } = useLinkStatus();
  const { t } = useTranslation();

  if (!pending) return null;

  return createPortal(
    <span className="link-pending" role="status" aria-label={t("navigation.loading")} />,
    document.body,
  );
}
