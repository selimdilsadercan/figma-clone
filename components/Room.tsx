"use client";

import { LiveMap } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "@/liveblocks.config";
import Loader from "@/components/Loader";

interface Props {
  children: React.ReactNode;
}

function Room({ children }: Props) {
  return (
    <RoomProvider id="fig-room" initialPresence={{ cursor: null, cursorColor: null, editingText: null }} initialStorage={{ canvasObjects: new LiveMap() }}>
      <ClientSideSuspense fallback={<Loader />}>{() => children}</ClientSideSuspense>
    </RoomProvider>
  );
}

export default Room;
