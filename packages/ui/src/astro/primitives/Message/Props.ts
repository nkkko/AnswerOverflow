import { MessageWithDiscordAccount } from "@answeroverflow/db";

type CosmeticProps = {
  showBorders?: boolean;
  className?: string;
  fullRounded?: boolean;
  loadingStyle?: 'lazy' | 'eager';
};

type Hidden = {
  /**
   * If typed as true, will blur the content
   * If typed as a number, will blur the content, with the number as the number of successive messages blurred
   */
  hidden: true | number;
} & CosmeticProps;

type NotHidden = {
  message: MessageWithDiscordAccount;
  /**
   * If typed as true, will blur the content
   * If typed as a number, will blur the content, with the number as the number of successive messages blurred
   */
  hidden?: false;
  /**
   * If typed as true, will collapse the content if longer than default
   * If typed as a number, will collapse the content if longer than the number
   */
  collapseContent?: boolean | number;
} & CosmeticProps;

export type MessageProps = Hidden | NotHidden;
