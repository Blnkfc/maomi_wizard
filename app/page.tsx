'use client'
import Image from "next/image";

export default function Home() {

  const handleSendMessage = async () => {
    try {
      const response = await fetch("/api/messaging", {
        method: "POST",
        body: JSON.stringify({
          text: "Hello from the client!"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <main>
        MAOMI

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSendMessage}> 
          SEND
        </button>
      </main>
    </div>
  );
}
