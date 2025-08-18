import { TextInput } from "@repo/ui/text-input";

export default function() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "cyan",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column"
    }}>
      <h1>Chat Room</h1>
      <div>
        <TextInput size="big" placeholder="Type your message..." ></TextInput>
      </div>
    </div>
  );
}
