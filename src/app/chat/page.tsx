'use client';
 
import { useChat } from 'ai/react';
import Image from 'next/image';

 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    
    <>
    <body className="bg-gradient-to-r from-green-400 to-blue-500 w-full">
    <main className="mx-auto w-full h-screen max-w-lg p-24 flex flex-col bg-primary">
        <h1 className="text-4xl font-bold mb-4">Kingsmen Chat</h1>
        <p className="text-xl mb-4">Let me know how I can be of assistance</p>
      <div className="relative flex place-items-center">
        </div>
      <section className="mb-auto m">
        {messages.map(m => (
          <div className="mb-4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </section>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md p-2 text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          className="border-solid border-2 border-white p-2 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
    </body>
    </>
  );
}