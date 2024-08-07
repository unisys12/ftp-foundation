# For The Puppies Foundation

Public facing site for our non-profit.

## Mission

To expand community education on animal service, therapy, emotional support, and companionship including responsible ownership, proper veterinary care, and humane sterilization. To help the existing rescue community through evaluation and training of rescue dogs, cats, and horses thereby enhancing the successful adoption rate. To facilitate low-cost sterilization of unattached dogs and cats.

## Vision

We would like to eventually build a community center where we can offer the following:

1. Agility course & training
2. Group training
3. Sniffing spot
4. Walking trails
5. Riding trails for horses
6. Summer reading programs for kids
7. Guardian program for dogs and cats
8. Year round education on the importance of positive reinforcement training

## Technologies

- [11ty](https://www.11ty.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)

## Required Documents

The site should have the following documents available on site:

- Annual returns for three years after the due date. This includes returns like your Form
  990, 990-EZ, 990-PF, and any Forms 990-T filed after August 17, 2006, including your
  extensions.
- All Form 990 schedules (except portions of Schedule B), attachments and supporting
  documents.
- Your application for exemption and all supporting documents, like Form 1023, if you filed
  it on or after July 15, 1987.

## Sponsorships

All sponsorships and donations will be collected through Givebutter. We are utilizing Givebutter widgets/components _(custom elements that are composed using LitHTML)_. Each component is identified by it's id attribute. I created an 11ty Global Data Object file in `src/_data/sponsor_ids.js` and will place each animals Sponsorship details there in the following format:

```json
{
    name: "Peanut",
    goal: "jbR8Xj",
    button: "gJKN4p",
},
```

## Sponsorship Tracking

What if I want to do something when the Goal Progress Bar is 100%. Need to look into accessing the shadow-dom since LitHTML is used for the Givebutter widgets.
