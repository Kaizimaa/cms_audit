import React from 'react';

export function Form({
  action,
  children,
  setUsername,
  setPassword,
}: {
  action: any;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  children: React.ReactNode;
}) {
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="username"
          className="block text-xs text-gray-600 uppercase"
        >
          Nama Pengguna
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          onChange={handleUsernameChange}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Kata Sandi
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          onChange={handlePasswordChange}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      {children}
    </form>
  );
}
