# The World Today — 24 November 2026

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![Rank](https://make.fun/badge/news-image-20261124/hadiba924-prog/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![Reward](https://make.fun/badge/news-image-20261124/hadiba924-prog/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

A one-page newspaper front page summing up the world's news of
**Tuesday, 24 November 2026**, built for the
[make.fun bounty "Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124).

## The front page

The lead story is the deepening standoff in the Gulf: Iran vows to defy the
American naval blockade and says it shot down a US drone near the Strait of
Hormuz. Around it, five more stories from the day:

- Ukraine says its drones sank a Russian warship in the Libyan port of Benghazi
- NATO sends AWACS early-warning jets to Poland after Russian missiles landed there
- Jensen Huang returns as Nvidia chief executive; the shares jump 31% and the Nasdaq 6.5%
- UN climate talks collapse in Turkey, drawing backlash in Australia and despair across the Pacific
- 24 people are confirmed dead in a candy factory fire in Indonesia, with about 30 still missing

A footer strip adds the day's other headlines: Israeli strikes in Gaza,
CrowdStrike's $44bn purchase of Zscaler, and Carlos Alcaraz winning the ATP Finals.

See [STRATEGY.md](STRATEGY.md) for the story choices and their sources.

## How it works

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
into `$MAKEFUN_OUTPUT_DIR` (default `/output`) and verifies the copy by size
and SHA-256 hash, so both grader runs produce byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
