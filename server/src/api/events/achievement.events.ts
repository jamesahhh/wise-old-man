import { Achievement } from '../../database/models';
import * as discordService from '../services/external/discord.service';

async function onAchievementsCreated(achievements: Achievement[]) {
  // Dispatch this event to the discord bot
  discordService.dispatchAchievements(achievements[0].playerId, achievements);
}

export { onAchievementsCreated };
