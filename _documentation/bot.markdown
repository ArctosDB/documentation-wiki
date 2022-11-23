---
title: Arctos Bots
layout: default_toc
---

# Arctos Bots

Bots are (very limited) users (Agents and Operators) who can write specific information to specific bulkloaders. The bot agent will take credit for the data, and this may generally be used to un-do any problems caused by bots. Data will be inserted with status=autoload, and processing will begin immediately. Any data which was not processed will be deleted before insertion; errors should be reported via Issues.

## Creation

Bots may be created only via functions/create_bot_agent. Creation must be coordinated with the DBA team. All bot agents are expected to be accompanied by scripts run by suitable handlers, and documented in agent remarks.

## Usage

Search Agents by agent_type=bot. For any agent which you would like running in your collection, manage the user and grant collection access. Access may be revoked at any time. Note that the access check is cached and will take about an hour to be recognized by the component loader. *Do not attempt to do anything else to the agent or operator; ignoring this may result in your account being locked.*

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/bot.markdown" target="_blank">here</a>.
