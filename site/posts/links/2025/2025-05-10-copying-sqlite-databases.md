---
linkOf: 'https://alexwlchan.net/2025/copying-sqlite-databases/'
title: 'A faster way to copy SQLite databases between computers'
via: 'https://buttondown.com/hacker-newsletter/archive/hacker-newsletter-744/'
---

The approach described in Alex's article also opens up another possibility, _storing_ your application's state (contained in the SQLite database) as plain text in a git repo. In fact, this is the approach I take with my [Homebrew packages bot](https://github.com/vincecima/homebrew-new-bot). Instead of using `sqlite3`, I use Simon Willison’s `sqlite_utils` package to do the [dump](https://github.com/vincecima/homebrew-new-bot/blob/b97ad2684e226193349acaef278b553d1717bfd3/src/homebrew_new_bot/__init__.py#L69-L74) and [restore](https://github.com/vincecima/homebrew-new-bot/blob/b97ad2684e226193349acaef278b553d1717bfd3/src/homebrew_new_bot/__init__.py#L79-L84) directly from the bot's Python code.
