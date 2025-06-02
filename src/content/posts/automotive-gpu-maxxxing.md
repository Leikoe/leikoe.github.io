---
title: 'Automotive GPU maxxxing'
date: '2025-05-31'
excerpt: "The story of how I ended up with a 4x A100 SXM datacenter gpu node in my bedroom (for less than two 4090s)."
tags: ['nvidia', 'gpu']
---
# Making a datacenter gpu server in my student bedroom

Back in 2023 when I was in Japan with my best friend, he introduced me to local LLMs and showed me the amazing LLamaCpp[^llamacpp].
He was planning his own GPU box build for hosting LLMs locally (he was serving models on his old gaming laptop at the time).
He ended up buying two new(!!) P40s off ebay. When they arrived months later, he travelled half the country to come meet me and we unboxed the cards together with friends.
This was the coolest unboxing I had ever done. **Data center grade hardware is so cool man.** And with an old workstation I had lying around we made a pretty fucking cool GPU box.
Having an overpowered computer in my bedroom was something I had already dreamed of and this was more than enough to get me to start looking at GPUs online to build one too **>_<**.

---

## GPU prices
Anyone who's been in the market for AI GPUs since 2023 knows that prices are out of this world.
The datacenter cards (and high end consumer ones) don't go down in price with time !??
This is why I made an Ebay Bot (had pretty good experience with making discord sniping bots from [Stonks](/posts/stonks)) which would ping me on discord with useful info when a new listing with one of the keywords I hardcoded was found. (Btw I hate OAuth for APIs)
This worked pretty well but I had to make filters because it found a lot of trash too.
I also noticed that the ebay TLD used mattered (some listings were seen on .pl/.it/.es/.fr/.com only).
After an update, my bot would check them all.
![Example of messages sent by the bot. Here a new listing and a price change.](/automotive-gpu-maxxxing/ebay_bot.png)


## The star of the show
For months I cliked on each notification but besides some scams (and funny price errors) nothing cool came up.
Then one day I saw this:

![The suspicious "DRIVE A100 AUTOMOTIVE SXM2" listing](/automotive-gpu-maxxxing/ebay_bot_drive_a100.png)
I was very sceptical and dissmissed it as another listing where the seller had no clue what he was selling and the description and title were half false.
But this same listing came up multiple times in the bot's channel and one day I randomly decided to ask the seller about the cards. He had no useful info but that they should work (he said that he wasn't aware of them working outside a car).

This is where the hunt for info online started. I tried google first, then all the other search engines and then at some point even tried non english search engines like baidu..
This card was basically unknown to the internet and clearly not something made for consumer desktops.

## The info hunt
Over the course of 6 months, I created a google docs with all my findings.
I first found [a post on a chinese blog](https://www.841973620.net:888/index.php/archives/PG199.html) which showed that the card was recognized.
This taught me the card was also named PG199 (which matches the 6G199 part number). It also confirmed the card was actually SXM2! This is pretty weird because A100 are normally SXM4.

I also found a [listing](http://www.quanaichina.com/product/29) on a chinese retail website which taught me the card came from an NVIDIA DRIVE AGX Pegasus DevKit.
![Picture of the devkit shown on the chinese retail website.](/automotive-gpu-maxxxing/agx_pegasus_devkit.png)

Then found a single(!) [page on nvidia's website](https://web.archive.org/web/20220527153449/https://developer.nvidia.com/drive/drive-hyperion) which referenced this card as **"One A100 GPU"** (on wayback machine xd).
This is were I got some official specs:
| Description | Details |
| ----------- | ----------- |
| Tensor core peak performance | **900 TOPS (INT8)** (sparsity??) |
| PCI Express Interface | **PCI Express 4.0 x16** |
| Total frame buffer | **32GB** |
| Memory bandwidth | **1433Gbps** |

So **32GB** of vram at **1.4TBps** ? that's pretty good ngl.


## Now how would I plug this in ?
The chinese post showed an NVIDIA branded SXM2 to PCIE adapter. Here's a picture for reference:
![SXM2 to PCIE adapter from the chinese blog post (NOT MINE)](/automotive-gpu-maxxxing/adapter.jpg)

This is where I noticed the card didn't visually match the one I saw on the ebay listing.
I also noticed that his card was running at 16GT/s (PCIE 4.0). But SXM2 is pcie 3.0 ???


> Fun fact: I found [this post](https://www.linkedin.com/posts/revo-tech-marketplace_revo-contact-us-activity-7195694274028417027-iVSN) on Linkedin from a company trying to sell DRIVE A100 gpus.

> And [this one](https://www.linkedin.com/posts/jan-newell-0a1a4b193_drive-pg199-activity-7189457823028629504-ewom) mentionning the card (DRIVE PG199) but showing a PCIE version which looks like a regular PCIE A100 but says DRIVE PG199 on it instead, pretty weird stuff.

I also found that the card was present on the MLPerf round 2.0 (not referenced/indexed by google, don't ask me how I found it).
![The DRIVE A100 performance on MLPerf round 2.0](/automotive-gpu-maxxxing/mlperf.png)

On google, one of the first results when searching for the card was [this servethehome forums thread](https://forums.servethehome.com/index.php?threads/automotive-a100-sxm2-for-fsd-nvidia-drive-a100.43196/). When going around on the thread and also searching for SXM2 adapters, I found [this other thread](https://forums.servethehome.com/index.php?threads/sxm2-over-pcie.38066/) (with the same people xd).
They were discussing the **AOM-SXMV** (or **AOM-SXM2**). It's a 4x SXM2 baseplate for V100 (and AOM-SXM2 variant is for P100 and has pascal NVLINK which is slower). This sxm baseplate is very interesting as it's the only (to my knowledge) SXM2 baseplate which isn't locked to the exact server model it's sold in.
It seemed like good solution but it had a major flaw: there aren't any pcie connectors that I could see on it. How would I plug it into my computer ?
Well spoiler: you need non standard pcie cables that go from JPCIE to PCIE, but asides from that this board is pretty much the perfect adapter.
- It doesn't restrict the GPU model you can plug in, unlike some other server boards **>:(**
- It's using logical PCIE for the data cables (the connector is physically different but it's just a different routing)
- It uses standard EPS12V connectors (the power cable for your cpu!!)
- It can be used without even plugging the occulink cables in (they're for rdma from what I understood)

After some research online, I quickly realized that getting an AOM-SXMV wouldn't be easy. The only real ways of getting one is either from a supermicro refurbished parts seller (900$ each, 2units min qty was the quote I got) or from Xianyu (chinese p2p marketplace). On Xianyu, I could find AOM-SXMV for around 2000yuan when I first started searching but when I wanted to get one it was impossible below 5000yuan..

While searching the internet some more (after some more months), I ended up stumbling on a [post on a chinese formum](https://bbs.itzmx.com/thread-109016-1-1.html) from a guy who got it to work on windows[^1] !!?
He kindly explained the different roadblocks he stumbled on and his solutions to get the card to work.
**Litteral goldmine of a post, it couldn't have been better.**

Things to note from his post:
- The screw holes for the heatsink are 36mm apart (in the length way of the gpu) instead of 32mm apart like regular SXM2/3/4. He used a custom made adapter bracket.
- His adapter only has one mazannine connector. In SXM2 sockets, the other connector is for NVLINK.
- Screws are not included in the AUTOMOTIVE A100/PG199 box (even when new & sealed). He gave the sizes he used.
- NVLINK doesn't work. (unknown reasons to me at this point)
- **He also shows that the GPU clearly works.**

I also found two videos about the card on bilibili:
- [One from a guy who got it for 2200yuan.](https://www.bilibili.com/video/BV1MT411k7E3) (269€/305$ as the time of writing this post which is dirt cheap for such a card)
- [Another form a chinese vtuber.](https://www.bilibili.com/video/BV1tCiFecEWc) for people who want to "pickup the trash" (???)

This second video confirmed the card would work with AOM-SXM2 and that NVLINK didn't work.
I decided to get 4 cards from ebay, got a bargain for very low because the dude wasn't getting sales and he had a huge inventory.

Months later here's what arrived.
![A brand new DRIVE A100 gpu.](/automotive-gpu-maxxxing/sealed_gpu.png)
> Note: there is a layer of protective resin or something on the card because it was meant to be used in production cars (probably against heat or water).

I knew I needed atleast the AOM-SXMV, **two** JPCIE to PCIE cables and 4 heatsinks to make it work.
While searching Xianyu for these, I came across this:
![A case for the AOM-SXMV/AOM-SXM2, with fans, a psu and all the cables & other things needed to make it nice.](/automotive-gpu-maxxxing/box.png)
> Note: we can see the power supply components peeking out on each gpu, which means they're not cooled by the heatsinks. This is fine for P100/V100 but PG199 has no power cap and can draw 600W if it wants to.. This is why I got different heatsinks.

After some more weeks searching Xianyu every day for good prices on all these items, I came across this:
![A nice 4x PG199 build on an AOM-SXMV inside the same box.](/automotive-gpu-maxxxing/pg199_box.png)
This was **exactly** what I wanted to build. Knowing that it would work and look reasonable was good news.

Then I struggled for multiple months to find an AOM-SXMV. And when I managed to buy one (I'm not chinese so I had to use a shopping agent to buy on Xianyu/taobao), I got refunded after multiple days of my agent getting ghosted by the seller.
During this time I started considering getting a full SXM2 server and putting the cards in.
I remembered that [l4rz](https://x.com/l4rz) showed on [his blog](https://l4rz.net/reverse-engineering-dell-idrac-to-get-rid-of-gpu-throttling/) that Dell C4130 SXM2 servers where automatically throlled when non standard gpu configs were used in them. He also explained how to bypass that in the same blog post.
I remembered that C4130 SXM2 base plates were pretty cheap on Xianyu and started searching for C4130 bare bones. I found some for around 300$, cpus were like 7$ on aliexpress and I would only have bought a bit of ram. This was my new plan until a friend helped me to get an AOM-SXMV for cheap and I just bought that instead.

Once that base plate was secured, I got the case combo, JPCIE to PCIE adapters and heatsinks on Xianyu.
- Case was around 300$
- Cables like 20$ each
- Heatsinks 20$ each too

> Note: this is before VAT, shipping and shopping agent fees.


## The build
After a month, everything was here!

Which explains this random picture on my twitter:
![All the parts layed down on my bedroom floor.](/automotive-gpu-maxxxing/all_the_parts.png)

Though I had multiples problems now:
I needed the different screws which I didn't had (and had no screw knowledge), and also needed to modify the heatsinks.


This is why we (with a mechanical engineer friend) popped the retention washers for the heatsink screws's springs.
![Picture of the poor spring retention washer after we removed it with a flat head screw driver and a hammer.](/automotive-gpu-maxxxing/rip_washer.png)

I then bought multiple files (I'm a dumdum and bought the wrong size at first so I had to make another trip to the hardware store with a SXM heatsink in my backpack..)
![Picture of the filing setup. It took multiple days to file the 4 heatsinks because it hurts my wrist pretty fast.](/automotive-gpu-maxxxing/filing_the_poor_heatsink.png)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sxm heatsink dust everywhere on my desk and fingers rn <a href="https://t.co/Jr7DOftDPG">pic.twitter.com/Jr7DOftDPG</a></p>&mdash; Léo (@Leik0w0) <a href="https://twitter.com/Leik0w0/status/1901019345309806610?ref_src=twsrc%5Etfw">March 15, 2025</a></blockquote>

> Note: If you don't want to go through the trauma that is making holes into **beautiful datacenter grade SXM accelerator heatsinks**, some Xianyu sellers sell the adapter brackets directly for 50$ each. Though I couldn't really afford to spend 200$ more and decided I would rather drill through my own SXM heatsinks
> ![Heatsink brackets adapters listing on Xianyu.](/automotive-gpu-maxxxing/heatsink_adapter.png)

I also managed to misalign all the heatsinks..
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Bro how did I manage to miss-align all 3 heatsinks <a href="https://t.co/TYYwejqN3D">pic.twitter.com/TYYwejqN3D</a></p>&mdash; Léo (@Leik0w0) <a href="https://twitter.com/Leik0w0/status/1899961949334483027?ref_src=twsrc%5Etfw">March 12, 2025</a></blockquote>
(In retrospect, this is probably because the heatsink screws could move around since the holes were now 4 times their width..)

After installing everything, playing with pcie bifurcation settings on both my desktops's bioses and giving up on windows, I had a working 4x A100 node in my bedroom! (don't mind the blahaj in the background)
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The bedroom gpu node is finally done ! <a href="https://t.co/3bo2TjyZmn">pic.twitter.com/3bo2TjyZmn</a></p>&mdash; Léo (@Leik0w0) <a href="https://twitter.com/Leik0w0/status/1901415971291537531?ref_src=twsrc%5Etfw">March 16, 2025</a></blockquote>

This gpu box is currently plugged into my r9 7950X 24/7 and it's the reason I don't play games right now (even wuwa).

Final specs are:
- R9 7950X 16C32T cpu
- 32GB of DDR5 @ 6000Mhz
- 4x DRIVE A100 /w 32GB of HBM2 @ 1.4TBps each

Yes there is 4x more vram than ram on this machine, no it's not a bottleneck for now (only doing RL stuff).

Yes this cpu as 24 pcie lanes and I should have at least 32. This will show during the benchmarks **:(**

> Practical note: The gpu case has it's own power supply which is independent from my desktop's. I bought a smart power plug on amazon for 11€ a now I can turn it on from my phone and also see the power draw and consumption on a given time frame.

## Smoke tests time **>:)**
Once this was hooked up and running, I started by running `nvidia-smi`:
![Screenshot of `nvidia-smi` on the machine.](/automotive-gpu-maxxxing/nvidia_smi.jpeg)

For temperature (hbm is fragile and you could kill it with high temps from what I got told) and power draw (the psu is 1400W) reasons, I downclocked the cards to 1140MHz (the lowest it accepts) and now they _only_ draw 250W each under full load.
> Note: the cards don't support power limiting AT ALL. Downclocking them is the only way to power limit them from what I know.

Then, a `gpu-fryer` run to see some flops!
![We got the flops bois.](/automotive-gpu-maxxxing/gpu_fryer.png)
> Note: this is only 210TF because the cards are downclocked. They're around 250TF when running at normal speed.

> Other note: some people suggested that the cards got this hot because the thermal paste between the die and the integrated heat spreader was completely dry. Futher proof of this, I saw some sellers on Xianyu showing these cards delieded on their listings.


Now for the bandwidth, I first ran a bandwidthTest, showing the pcie link speed from host to device:
![Bandwidth test from host to device, on GPU0, which is one of the two connected in PCIE 3.0 16x](/automotive-gpu-maxxxing/bandwidth-test.png)
> Note: GPU0 and GPU1 are connected to the first pcie switch on the AOM-SXMV, which is connected to my first PCIE x16 slot. The second PCIE x16 slot is physically 16x but because of the limited number of CPU PCIE lanes, bifurcation happens and that slot runs slower. This is why GPU0 and GPU1 run at PCIE 3.0 x16 speed.

Then I tried p2p bandwidth test:
![P2P bandwidth test. This test clearly shows that GPU0 and GPU1 are running at higher speeds than GPU2 and GPU3](/automotive-gpu-maxxxing/p2p_bandwidth_test.png)
> One more note: the fact that even when P2P=Enabled the GPU0 and GPU1 have a much higher p2p bandwidth shows that the PCIE switch on the AOM-SXMV is also running at slower speeds.

Then we finish with some all reduce bandwidth tests, first with all four GPUS:
![NCCL tests all reduce test running on all four cards.](/automotive-gpu-maxxxing/four_cards_all_reduce.png)
Then with only the two running at PCIE 3.0 x16:
![NCCL tests all reduce test running on the two cards @ PCIE 3.0 x16.](/automotive-gpu-maxxxing/two_cards_all_reduce.png)

Also if you were wondering, Minecraft runs fine on A100:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Minecraft does run on nvidia A100D (very poorly) <a href="https://t.co/TSd52rRLOF">pic.twitter.com/TSd52rRLOF</a></p>&mdash; Léo (@Leik0w0) <a href="https://twitter.com/Leik0w0/status/1898487119447822447?ref_src=twsrc%5Etfw">March 8, 2025</a></blockquote>
(The post says very poorly but this was when I was running the cards at PCIE 3.0 x4. Now it runs fine ..)

> Note: for the NVLINK, I ended up finding a guy on Xianyu who would modify the cards to make them work but it's 50 qty minimum and it seems pretty sketchy. From what I know, the chip supports NVLINK but the pcb misses the NVLINK traces so they change it. **It's not a software side problem. The gsp reports that the card doesn't support NVLINK**

**Thank you to everyone who helped me through this insane journey.**
## And thank you for reading !!

---

## Also here is a list of fun things found by the bot:
![A full H100 baseboard going for 75K :sob:](/automotive-gpu-maxxxing/rich_people_being_rich.png)
![OOF -- Poor seller probably had an heart attack](/automotive-gpu-maxxxing/woops.png)


[^llamacpp]: llama.cpp. LLM inference in C/C++. [https://github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)
[^1]: In TCC (compute) mode, not WDDM (graphic) mode. Note that these modes are windows driver only.


<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
