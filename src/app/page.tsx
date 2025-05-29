import Chat from "@/components/screens/chats/Chat";
import ChatList from "@/components/screens/chats/ChatList";
import CurrentUser from "@/components/screens/chats/CurrentUser";
import Image from "next/image";

/**
 * Страница чатов
*/
export default function ChatsPage() {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: ".7fr 3fr",
      }}
    >
      <div className="border-r border-gray-600">
        <CurrentUser />
        <ChatList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
}
