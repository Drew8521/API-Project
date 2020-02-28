# Marvelmore
By: Tanya Nobal, Maya Dahlke, Andrew Seaman

## What is Marvelmore?

Marvelmore is a quiz that takes a user's interests and personality traits and gives them a Marvel character they are similar to along with a list of comics that the character appears in.

## API and How They are Used:

*GET /v1/public/characters(fetch list of characters)*- will get character name, id, description, comics, image 
*GET /v1/public/characters/{characterId}/comics* - (fetch list of comics filtered by a character id) - will use the character id from the above API to get a list of comics, and information about each comic, featuring a certain character 
