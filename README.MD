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

## Dog Attributes

Retrieved from Rescue Groups.org API on each dogs profile page.

```json
{
  "distance"	:	0,
"activityLevel"	:	"Slightly Active",
"adoptionFeeString"	:	0,
"isAdoptionPending"	:	false,
"adultSexesOk"	:	"All",
"ageGroup"	:	"Adult",
"ageString"	:	"11 Months",
"availableDate"	:	"2024-03-07T00:00:00Z",
"birthDate"	:	"2023-12-14T00:00:00Z",
"isBirthDateExact"	:	false,
"breedString"	:	"Labrador Retriever / Boxer / Mixed (short coat)",
"breedPrimary"	:	"Labrador Retriever",
"breedPrimaryId"	:	162,
"breedSecondary"	:	"Boxer",
"breedSecondaryId"	:	104,
"isBreedMixed"	:	true,
"isCatsOk"	:	true,
"coatLength"	:	"Short",
"isCourtesyListing"	:	false,
"isCurrentVaccinations"	:	true,
"isDeclawed"	:	false,
"descriptionHtml"	:	"<p style=\"text-align: center;\"><br>\nIntroducing Luna, the life of the paw-ty! This spunky pup was discovered alongside her siblings in the heart of rural Mississippi, but now she&#39;s shining bright in her foster home and on the lookout for her forever family. Luna is not just your average dog &ndash; she&#39;s a social butterfly extraordinaire! Whether it&#39;s fellow fur-babies, feline friends, or little humans of all ages, Luna&#39;s wagging tail is a universal welcome sign.</p>\n\n<p style=\"text-align: center;\">This playful pooch is all about fun and games! From fetch marathons with her favorite toys to playful romps with the kiddos, Luna&#39;s energy knows no bounds. But hey, don&#39;t be fooled by her mischievous antics &ndash; she&#39;s already a pro at the whole house-training, crate-training, and leash-walking gig!</p>\n\n<p style=\"text-align: center;\">When Luna isn&#39;t busy charming everyone in sight, you&#39;ll find her soaking up all the cuddles and belly rubs she can get. Long walks? Oh, she&#39;s all in! Luna&#39;s ready to hit the pavement and explore the world with her future paw-rents by her side.</p>\n\n<p style=\"text-align: center;\">If you&#39;re ready to invite a bundle of joy, love, and endless cuddles into your home, Luna is your gal! Reach out to For The Puppies Foundation Inc. and make Luna&#39;s dreams of a forever home come true. Let&#39;s make Luna&#39;s happily ever after a reality! ✨</p>\n\n<p style=\"text-align: center;\">Fill out the adoption application here: www.forthepuppiesfoundation.org/adoption</p><img src=\"https://tracker.rescuegroups.org/pet?20290947\" width=\"0\" height=\"0\" alt=\"\" />
descriptionText	:	\nIntroducing Luna, the life of the paw-ty! This spunky pup was discovered alongside her siblings in the heart of rural Mississippi, but now she&#39;s shining bright in her foster home and on the lookout for her forever family. Luna is not just your average dog &ndash; she&#39;s a social butterfly extraordinaire! Whether it&#39;s fellow fur-babies, feline friends, or little humans of all ages, Luna&#39;s wagging tail is a universal welcome sign.\n\nThis playful pooch is all about fun and games! From fetch marathons with her favorite toys to playful romps with the kiddos, Luna&#39;s energy knows no bounds. But hey, don&#39;t be fooled by her mischievous antics &ndash; she&#39;s already a pro at the whole house-training, crate-training, and leash-walking gig!\n\nWhen Luna isn&#39;t busy charming everyone in sight, you&#39;ll find her soaking up all the cuddles and belly rubs she can get. Long walks? Oh, she&#39;s all in! Luna&#39;s ready to hit the pavement and explore the world with her future paw-rents by her side.\n\nIf you&#39;re ready to invite a bundle of joy, love, and endless cuddles into your home, Luna is your gal! Reach out to For The Puppies Foundation Inc. and make Luna&#39;s dreams of a forever home come true. Let&#39;s make Luna&#39;s happily ever after a reality! ✨\n\nFill out the adoption application here: www.forthepuppiesfoundation.org/adoption",
"isDogsOk"	:	true,
"earType"	:	"Natural/Uncropped",
"energyLevel"	:	"Moderate",
"exerciseNeeds"	:	"Moderate",
"eyeColor"	:		"Brown",
"fenceNeeds"	:	"Not Required",
"isNeedingFoster"	:	true,
"isFound"	:	false,
"groomingNeeds"	:	"Low",
"priority"	:	10,
"isHousetrained"	:	true,
"indoorOutdoor"	:	"Indoor and Outdoor",
"isKidsOk"	:	true,
"name"	:	"Luna",
"newPeopleReaction"	:	"Friendly",
"obedienceTraining"	:	"Has Basic Training",
"ownerExperience"	:	"Species",
"pictureCount"	:	2,
"pictureThumbnailUrl"	:	"https://cdn.rescuegroups.org/11256/pictures/animals/20290/20290947/98829740.jpg?width=100",
	qualities		[14],
rescueId	:	24-0008,
searchString	:	Luna Black Female Medium 24-0008 Dogs Labrador Retriever / Boxer / Mixed (short coat)s
sex	:	Female
sheddingLevel	:	Moderate
sizeCurrent	:	38
sizeGroup	:	Medium
sizePotential	:	50
sizeUOM	:	Pounds
slug	:	adopt-luna-labrador-retriever-dog
isSpecialNeeds	:	false
isSponsorable	:	true
sponsorshipDetails	:	Donate to care
sponsorshipMinimum	:	100.00
tailType	:	Long
trackerimageUrl	:	https://tracker.rescuegroups.org/pet?20290947
videoCount	:	0
videoUrlCount	:	0
vocalLevel	:	Some
isYardRequired	:	true
createdDate	:	2024-03-07T15:59:26Z
updatedDate	:	2024-12-13T14:23:03Z
}
```
