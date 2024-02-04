import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
  throttle: 16
});

type Presence = {
  // cursor: { x: number, y: number } | null,
  // ...
};

type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
};

type UserMeta = {
  // id?: string,  // Accessible through `user.id`
  // info?: Json,  // Accessible through `user.info`
};

type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

export type ThreadMetadata = {
  // resolved: boolean;
  // quote: string;
  // time: number;
};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction
  }
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(client, {
  async resolveUsers({ userIds }) {
    return [];
  },
  async resolveMentionSuggestions({ text, roomId }) {
    return [];
  }
});
