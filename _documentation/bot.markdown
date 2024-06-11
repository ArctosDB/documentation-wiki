---
title: Arctos Bots
author: Dusty L. McDonald, Teresa J. Mayfield-Meyer, Michelle Koo
date: 2024-06-11
layout: default_toc
---

# Arctos Bots

Bots are (very limited) users (Agents and Operators) who can write specific information to specific bulkloaders. The bot agent will take credit for the data, and this may generally be used to un-do any problems caused by bots. Data will be inserted with status=autoload, and processing will begin immediately. Any data which was not processed will be deleted before insertion; errors should be reported via Issues.

## How To Create Arctos Bots

Bots may be created only via functions/create_bot_agent. Creation must be coordinated with the DBA team. All bot agents are expected to be accompanied by scripts run by suitable handlers, and documented in agent remarks.

If you have a request for an Arctos Bot, [file an issue](https://github.com/ArctosDB/arctos/issues/new).

## How To Use Arctos Bots

Search Agents by agent_type=bot to see a [list of Arctos Bots](https://arctos.database.museum/agent.cfm?agent_type=bot&include_verbatim=false&include_bad_dup=false).

To allow an Arctos Bot to make edits in a collection, manage the Arctos Bot user (operator) and grant access to the collection. Access may be revoked at any time.

Note that the access check is cached and will take about an hour to be recognized by the associated component loader.

![](https://raw.Githubusercontent.com/ArctosDB/documentation-wiki/gh-pages/tutorial_images/Bear%20Caution.jpg) **Caution**

**Do not attempt to edit any bot agent profile (e.g. remarks or status) or operator account (eg Locked status). Ignoring this will result in your account being locked.** 

Simply click on Manage in the operator account and Grant Access to collection(s) you manage.

## Edit this Documentation

If you see something that needs to be edited in this document, you can create an issue using the link under the search widget at the top left side of this page, or you can edit directly <a href="https://github.com/ArctosDB/documentation-wiki/edit/gh-pages/_documentation/bot.markdown" target="_blank">here</a>.
