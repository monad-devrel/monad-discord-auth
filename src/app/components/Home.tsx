'use client';
import { MONAD_DEFAULT_ROLE_NAME, MONAD_ROLES } from '@/constants/monad_roles';
import { GuildMember } from '@/services/discord/types';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';

type HomeProps = {
  session: Session | null;
  userIsPartOfMonad: boolean;
  userGuildMember: GuildMember | undefined;
};

export default function HomeComponent({ session, userIsPartOfMonad, userGuildMember }: HomeProps) {
  const roles = userGuildMember?.roles || [];
  let roleNames = roles?.map((role) => {
    const potentialMonadRole = MONAD_ROLES[role as keyof typeof MONAD_ROLES];
    return potentialMonadRole ? potentialMonadRole : MONAD_DEFAULT_ROLE_NAME;
  });

  // if there's at least one role that's not the default role, we want to only show the roles that are not the default role
  const hasNonDefaultRole = roleNames?.some((role) => role !== MONAD_DEFAULT_ROLE_NAME);
  if (hasNonDefaultRole) {
    roleNames = roleNames?.filter((role) => role !== MONAD_DEFAULT_ROLE_NAME);
  } else {
    roleNames = [MONAD_DEFAULT_ROLE_NAME];
  }

  // Retrieves a personalized message based on the user's roles, if the user is part of the Monad group.
  const getContentFromRole = () => {
    const successText = "You're all set, looks like you're indeed a ";
    if (userIsPartOfMonad) {
      if (roleNames.includes('nads')) return `${successText} Nad`;
      else if (roleNames.includes('full_access')) return `${successText} full access`;
      else return `Oh! Looks like you're still a newbie`;
    }
    return "Oops, looks like you're not a discord member yet :(";
  };
  const roleContent = getContentFromRole();

  return (
    <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex lg:flex-col">
      {session ? (
        <>
          Signed in as {session?.user?.name}
          <br />
          <button onClick={() => signOut()}>Sign out</button>
          <br />
          <h2>{roleContent}</h2>
          <br />
          {userIsPartOfMonad && (
            <div>{roleNames?.map((roleName) => <div key={roleName}>{roleName}</div>)}</div>
          )}
        </>
      ) : (
        <>
          <button onClick={() => signIn()}>Let&apos;s verify if you&apos;re a Nad</button>
        </>
      )}
    </div>
  );
}
