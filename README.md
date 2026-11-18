# Developer Jokes CLI

A command-line tool that fetches a list of developer jokes from an API and displays one at random.

## Installation

```
npm install
```

## Usage

```
npm start
```

Example output:

```
Here's a developer joke for today:

Q: Why do programmers prefer dark mode?
A: Because light attracts bugs.
```

## How it works

Axios requests the jokes from the API. The program selects one joke at random from the returned data and logs its question and answer. If the request fails, an error message is displayed.