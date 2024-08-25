import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const prisma = new PrismaClient();

const scopes = ['identify', 'email', 'guilds', 'guilds.members.read'];

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
      authorization: 'https://discord.com/oauth2/authorize?scope=' + scopes.join('+'),
      profile(profile) {
        let imageUrl = '';
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5;
          imageUrl = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith('a_') ? 'gif' : 'png';
          imageUrl = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }

        delete profile.avatar_decoration_data;

        return {
          ...profile,
          id: profile.id,
          name: profile?.global_name,
          username: profile?.username,
          discriminator: profile?.discriminator,
          image: imageUrl,
          banner: profile.banner,
          accentColor: profile.accentColor,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  callbacks: {
    // async signIn({ account }: { account: Account }) {
    //   const guilds: Guild[] = (await fetchGuilds(account.access_token)) as unknown as Guild[];
    //   const userIsInMonad = guilds.some(
    //     (guild: Guild) => guild.id === process.env.MONAD_GUILD_ID,
    //   );
    //   if (!userIsInMonad) {
    //     return '/unauthorized/not-in-monad';
    //   }
    //   const userRolesInMonad = await fetchGuildMember(account?.access_token);
    //   const url_success = '/protected?roles=' + userRolesInMonad?.roles.join('-');
    //   return !!url_success;
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    // async session({ session, token, user }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
    // logger: {
    //   error(code, metadata) {
    //     log.error(code, metadata);
    //   },
    //   warn(code) {
    //     log.warn(code);
    //   },
    //   debug(code, metadata) {
    //     log.debug(code, metadata);
    //   },
    // },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
