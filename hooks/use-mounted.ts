"use client";

import { useEffect, useState } from "react";

/**
 * 컴포넌트가 클라이언트에서 마운트되었는지 확인하는 훅
 * 하이드레이션 에러 방지에 유용
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
