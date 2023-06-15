---
title: 【转载】NovelAI模型泄露部署教程
date: 2022-10-12
tags:  NovelAI 机器学习 版权争议 转载
categories: article
---

[Source](https://rentry.org/voldy)

#->==--VOLDY RETARD GUIDE--==<-#
->*He who shall not be named*<-
->`The definitive Stable Diffusion experience ™`<-
->(Special thanks to all anons who contributed)<-
**->[---FEATURE SHOWCASE & HOWTO---](https://github.com/AUTOMATIC1111/stable-diffusion-webui-feature-showcase)<-**
*Notable: GUI, Inpainting/Outpainting, Live generation preview, Tiling, Upscaling, <4gb VRAM support, Negative prompts, CLIP*
==(Basic) CPU-only guide available [**Here**](https://rentry.org/cputard)==
==[**Japanese guide here 日本語ガイド**](https://gigazine.net/news/20220907-automatic1111-stable-diffusion-webui/)==
==**[NEW] (10/7) [NovelAI FAQ](https://rentry.org/sdg_FAQ)**== [(News)](https://rentry.org/sdupdates)


[TOC]
**Minimum requirements:**  
-16gb ram
-Nvidia Maxwell-architecture or newer GPU with **at least** 2gb vram
-Linux or Windows 7/8/10+ 
-20gb disk space
##->`--GUIDE--`<-##

**Step 1:** [**Install Git**](https://github.com/git-for-windows/git/releases/download/v2.37.3.windows.1/Git-2.37.3-64-bit.exe) [(page)](https://git-scm.com/download/win)
-When installing, make sure to select the Windows Explorer integration > Git Bash

**Step 2:** Clone the WebUI repo to your desired location:
-Right-click and select 'Git Bash here'
-Enter `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui`
(Note: to **update**, all you need to do is is type `git pull` within the newly made webui folder)

**Step 3:** Download the 1.4 AI model from [huggingface](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original) (requires signup) or [**HERE**](https://drive.yerf.org/wl/?id=EBfTrmcCCUAGaQBXVIj5lJmEhjoP1tgl) 
-[(torrent magnet)](magnet:?xt=urn:btih:3a4a612d75ed088ea542acac52f9f45987488d1c&dn=sd-v1-4.ckpt&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337)
(Alternate) 1.4-based **Waifu model** trained on an additional **56k** Danbooru images [**HERE**](https://thisanimedoesnotexist.ai/downloads/wd-v1-2-full-ema.ckpt) [(**mirror**)](http://wd.links.sd:8880/wd-v1-2-full-ema.ckpt) 
-[(torrent magnet)](magnet:?xt=urn:btih:INEYUMLLBBMZF22IIP4AEXLUK6XQKCSD&dn=wd-v1-2-full-ema.ckpt&xl=7703810927&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce) 
*(Note: Several GB larger than normal model, see instructions below for pruning)*
[comparison](https://cdn.discordapp.com/attachments/930499731451428926/1017258164439220254/unknown.png)

-**See [This page](https://rentry.org/sdmodels) for additional models** (Most in beta)

**Step 4:** Rename your .ckpt file to "model.ckpt", and place it in the `/models/Stable-diffusion`folder

**Step 5:** [**Install Python 3.10.6**](https://www.python.org/ftp/python/3.10.6/python-3.10.6-amd64.exe) [(Windows 7 ver)](https://github.com/adang1345/PythonWin7/raw/master/3.10.6/python-3.10.6-amd64-full.exe) [(page)](https://www.python.org/downloads/windows/)

Make sure to choose "**add to PATH**" when installing

**Step 6 (Optional):** 
This reduces VRAM, and allows you to generate at larger resolutions or batch sizes for a <10% loss in raw generation speed
(For me, singular results were significantly slower, but generating with a batch size of 4 made each result **25% faster** on average)
-Edit `webui-user.bat` 
-Change `COMMANDLINE_ARGS=` to `COMMANDLINE_ARGS=--medvram`

**Step 7:** Run `webui-user.bat` from your File Explorer. Run it as normal user, **not** as administrator.
- Wait patiently while it installs dependencies and does a first time run. 
It may *seem* "stuck" but it isn't. It may take up to 10-15 minutes.
==And you're done!==

!!!note Usage
- Open webui-user.bat
- After loading the model, it should give you a LAN address such as **'127.0.0.1:7860'**
- Enter the address into your browser to enter the GUI environment
Tip: Hover your mouse over UI elements for tooltips about what they do
- To exit, close the CMD window

##->`--NovelAI Setup--`<-##
*Provided in service to freedom of information, testing and research*
*If you enjoy your results, consider [**subscribing**](https://novelai.net/register)*

**Step 1:** Follow the main guide above
-(Ignore steps **3** and **4** if you *only* plan on using the NovelAI model)

**Step 2:** Download a [Torrent Client](https://www.qbittorrent.org/download.php) if you don't have one already
-Add the following Magnet link:
[magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc](magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc)
-**Deselect** everything except for the the ` /animefull-final-pruned` subfolder (under /stableckpt), **and** `animevae.pt`
-(Optional: select desired **.pt** hypernetworks in the `/modules` subfolder (*These are **not** used by default in NAI but can provide unique results*)

**Step 3:** Once finished, **rename** the following files you torrented like so:
`animevae.pt` **>>** `nai.vae.pt`
`config.yaml` **>>** `nai.yaml`
`model.ckpt`**>>** `nai.ckpt`

**Step 4:** Place **all 3** files into `/stable-diffusion-webui/models/Stable-diffusion`

**Step 5 (Optional):** If you want to launch NovelAI by default, do the following
-Edit webui-user.bat in notepad and add the NAI .ckpt:
`COMMANDLINE_ARGS=--nai.ckpt` 
Otherwise, you can just select it within the WebUI under the 'Settings' tab

!!!note Replicating NovelAI defaults
It is possible to create outputs **identical** to NovelAI's current subscription service by doing the following:

-Set the sampler to **Euler** (Not Euler A)

-Use **28** Steps

-Set CFG Scale to **11**

-Add **masterpiece, best quality** at the beginning of all positive prompts

-Use **nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name** as the negative prompt
(nsfw is optional, and toggled on the site)

-In the Settings tab, change **Ignore last layers of CLIP model** to **2** and apply

==And you should be ready to prompt!==

!!!info Testing accuracy 
The easiest way to test if your NovelAI setup is functioning properly is to attempt replicating a result from NovelAI itself:
For this example we'll be using best girl:
![Asuka](https://i.ibb.co/dD9NNx1/naio.png)
**Sampler:** `Euler`
**Seed:** `2870305590`
**CFG:** `12`
**Resolution:** `512x512`
**Prompt:** `masterpiece, best quality, masterpiece, asuka langley sitting cross legged on a chair`
**Negative Prompt:** `lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts,signature, watermark, username, blurry, artist name`
(Double check you copied the prompts exactly!)
Note: You may see very slight variation if you are using an optimization such as lowvram or xformers, but it should still be **95%** similar

##->`--RUNNING ON 4GB (And under!)--`<-##
==These parameters are also useful for regular users who want to make larger images or batch sizes!==
It is possible to drastically reduce VRAM usage with **some modifications:**
- **Step 1:** Edit `webui-user.bat` 
- **Step 2:** After ` COMMANDLINE_ARGS=` , enter your desired parameters:
**Example:** `COMMANDLINE_ARGS=--medvram` 

- If you have 4GB VRAM and want to make 512x512 (or maybe larger) images, 
use `--medvram`.
- If you have **2GB** VRAM,
use `--lowvram`

If you are getting 'Out of memory' errors on either of these, add `--always-batch-cond-uncond` to the other arguments

==**NOTES:**==
- If you get a **green/black screen** instead of generated pictures, you have a card that doesn't support half precision floating point numbers (known problem on 16xx cards):
 You must use `--precision full --no-half` in addition to other flags, and the model will take much more space in VRAM
- Make sure to **disable** hardware acceleration in your browser and close anything which might be occupying VRAM if you are getting out-of-memory errors, and possibly remove GFPGAN (if you have it)

##->`--ALTERNATE GUIDE (Conda)--`<-##
==(You can try this method if the traditional install isn't working)==
- **Follow Steps 1-4 on the main guide above**
- Download Miniconda [HERE](https://docs.conda.io/en/latest/miniconda.html). Download Miniconda 3
- Install Miniconda in the default location. Install for **all users**. 
Uncheck "Register Miniconda as the system Python 3.9" unless you want to
- Open Anaconda Prompt (miniconda3)
- In Miniconda, navigate to the `/stable-diffusion-webui` folder wherever you downloaded using "cd" to jump folders.
(Or just type "cd" followed by a space, and then *drag the folder into* the Anaconda prompt.)
- Type the following commands to make an environment and install the necessary dependencies:
- `conda create --name qwe`
(You can name it whatever you want instead of qwe)
- `conda activate qwe`
- `conda install python`
- `conda install git`
- `webui-user.bat`
(Note: it may seem like it's stuck on "Installing torch" in the beginning. This is normal and should take 10-15 minutes)
==It should now be ready to use==

!!!note Usage
- Navigate to `/stable-diffusion-webui` in Miniconda
- Type `conda activate qwe` 
(You will need to type 'conda activate qwe' every time you wish to run webui)
- Type `webui-user.bat`
- After loading the model it should give you a LAN address such as '**127.0.0.1:7860**'
Enter the address into your browser to enter the GUI environment

##->`--LINUX INSTALLATION--`<-##
**Step 1:** Install dependencies
- Debian-based:
`sudo apt install wget git python3 python3-venv`
- Red Hat-based:
`sudo dnf install wget git python3`
- Arch-based:
`sudo pacman -S wget git python3`

**Step 2:** To install in `/home/$(whoami)/stable-diffusion-webui/`, run:
`bash <(wget -qO- https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh)`

##->`--LINKS--`<-##
- [Facial Expression Prompts (NovelAI)](https://rentry.org/faces-faces-faces)
- [Textual Inversion guide](https://rentry.org/textard) (Allows you to teach Stable Diffusion to understand new concepts!)
- [Artist list with pictures](https://rentry.org/artists_sd-v1-4)
- [Top 500 artists comparison](https://www.urania.ai/top-sd-artists)
- [Search the training database](https://haveibeentrained.com/)
- [SD wiki](https://wiki.installgentoo.com/wiki/Stable_Diffusion) (on hiatus)
- [Voldy's mini-wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)
- [Inpainting Tips](https://rentry.org/drfar)
- [Anon's guide for anime vectors](https://rentry.org/anime_and_titties) (Waifu Diffusion)
- [Prebuilt Xformers](https://rentry.org/25i6yn)
- [Remacri Upscaler](https://u.pcloud.link/publink/show?code=kZgSLsXZ0M1fT3kFGfRXg2tNtoUgbSI4kcSy)(Landscapes) [Lollypop Upscaler](https://drive.google.com/u/1/uc?id=10h8YXKKOQ61ANnwLjjHqXJdn4SbBuUku&export=download)(Anthropomorphic Figures)
- [Other Upscaler Models](https://upscale.wiki/wiki/Model_Databaseat)
(Place upscaler models in ESRGAN folder)
- [Trinart](https://huggingface.co/naclbit/trinart_stable_diffusion_v2/resolve/main/trinart2_step60000.ckpt) Alternate .ckpt (Pixiv-esque illustrations, not as cohesive as waifu diffusion)
- Build great aesthetic prompts using the [prompt builder](https://promptomania.com/stable-diffusion-prompt-builder/)
- [Japanese Keywords](https://chara-zokusei.jp/question_list)
- Use [Darkreader](https://darkreader.org/) to change your Gradio theme to dark mode
- [Informal Training guide](https://rentry.org/informal-training-guide) (30gb vram+)
- [Python for Windows 7](https://github.com/adang1345/PythonWin7)
- [Stable diffusion WebUI repo](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [Waifu Diffusion huggingface page](https://huggingface.co/hakurei/waifu-diffusion)

##->`--TROUBLESHOOTING--`<-##
- Make sure your folder paths do **not have spaces**
- If you are getting a **winerror** when installing, or you feel you broke something and want to reinstall from scratch, 
delete these directories: `venv`, `repositories` and try again
- (img2img) if you get **RuntimeError: Sizes of tensors must match**, you need to change the resolution of your input image
- Make sure you have the latest [CUDA toolkit](https://developer.nvidia.com/cuda-11.3.0-download-archive?target_os=Windows&target_arch=x86_64) and GPU drivers you can run
- If you get **Torch is not able to use GPU**, you may have to download [Python 3.7](https://www.python.org/downloads/release/python-370/) instead
- If you get **'Git' is not recognized as a command** when launching, do the following:
-Edit launch.py
-Delete all lines that start with `git_clone` and save
- if your version of Python is not in PATH (or if another version is) 
create or modify webui.settings.bat in `/stable-diffusion-webui`folder
add the line set PYTHON=python to say the full path to your python executable: `set PYTHON=B:\soft\Python310\python.exe`
You can do this for python, but not for git.
- The installer creates a python virtual environment, so none of installed modules will affect your system installation of python if you had one prior to installing this.
- To prevent the creation of virtual environment and use your system python, edit webui.bat replacing set `VENV_DIR=venv` with `set VENV_DIR=`
- webui.bat installs requirements from files `requirements_versions.txt`, which lists versions for modules specifically compatible with Python 3.10.6. 
If you choose to install for a different version of python, editing webui.bat to have set REQS_FILE=requirements.txt instead of set REQS_FILE=requirements_versions.txt may help (but I still reccomend you to just use the recommended version of python).
- If you get a **green/black** output instead of generated pictures, you have a card that doesn't support half precision floating point numbers (known problem on 16xx cards):
-edit webui-user.bat
-Modify line 6 to `COMMANDLINE_ARGS=--precision full --no-half`along with any other flags you wish to add
Unfortunately, the model will take much more space in VRAM-
So it is recommended to use flags like `--medvram` in combination with it
- If your output is a jumbled rainbow mess your image resolution is set TOO LOW
- Having too high of a CFG level will also introduce color distortion, your CFG should be between 5-15
- On older systems, you may have to change `cudatoolkit=11.3` to `cudatoolkit=9.0`
- Make sure your installation is on the C: drive
- This guide is designed for NVIDIA GPUs *only*, as stable diffusion requires cuda cores.
  AMD users should try [THIS GUIDE](https://rentry.org/ayymd-stable-diffustion-v1_4-guide)

##->`--TIPS--`<-##
- If you are generating images **larger** than 512x512, make sure to check **Highres, fix** for the best results.
otherwise, 'cloning' distortion will begin appearing (multiple faces, arms, etc)
+Lower denoising strength seems to work best (I used 0.5)
- Even with the available fix, it is still recommended to generate in 512x512 for the most accurate results, as the model was trained on 512x images
- The Waifu model and normal .ckpt have their own pros and cons;
Non-anime promps done with the waifu .ckpt will be biased toward anime stylization, making realistic faces and people more difficult
- Use (((  ))) around keywords to increase their strength and [[[ ]]] to decrease their strength
- Unlike other samplers, **k_euler_a** can generate high quality results from low steps. Try it with 10-25 instead of 50
- **Save prompt as style** allows you to save a prompt as an easily selectable output. A box to select will appear to the left of Roll after you save your first style, allowing you to make a selection. Prompts can be deleted by accessing `styles.csv` 
(This can be helpful if you find a combination that generations really good images and want to repeatedly use it with varied subjects.)
- You can drag your favorite result from the output tab on the right **back into** img2img for further iteration
- The **k_euler_a** and **k_dpm_2_a** samplers give vastly different, more intricate results from the same seed & prompt
However their results are not consistent throughout steps. Other samplers provide more predictable, linear refinement with more steps
- The seed for each generated result is in the output filename if you want to revisit it
- Using the same keywords as a generated image in img2img produces interesting variants
- It's recommended to have your prompts be at least 512 pixels in *one* dimension, or a 384x384 square at the smallest
   Anything smaller will have heavy distortion
- CLIP interrogator takes up a lot of space (8gb), you might not want to select it if you don't plan on using it frequently
- Try Low strength (0.3-0.4) + High CFG in img2img for interesting outputs
- You can use Japanese Unicode characters in prompts

##->`--HOWTO EXTRAS--`<-##
->==-----**Launching Different Models**-----==<-
If you have multiple models installed and you want to launch from another conveniently, you can make another .bat
- Make a copy of webui-user.bat and name it whatever you want
- After ` COMMANDLINE_ARGS=`, add `--ckpt` followed by the desired model to your launch parameters:
eg: `COMMANDLINE_ARGS=--ckpt wd-v1-2-full-emma.ckpt` 
You can also select a different model while in the webUI, under the **settings** tab

->==-----**Changing UI Defaults**-----==<-
After running once, a `ui-config.json` file appears in the webui directory:
Edit values to your liking and the next time you launch the program they will be applied.

->==-----**Running Online or through LAN**-----==<-
Edit webui-user.bat and add the necessary parameters after `COMMANDLINE_ARGS=`, along with any existing parameters you have
- Use `--share` option to run online. You will get a xxx.app.gradio link. This is the intended way to use the program in collabs.
- Use `--listen` to make the server listen to network connections. This will allow computers on your **local network** to access the UI, and if you configure port forwarding, also computers on the internet.
- Use `--port xxxx` to make the server listen on a specific port, `xxxx` being the wanted port. Remember that all ports below 1024 needs root/admin rights, for this reason it is advised to use a port above 1024. Defaults to port 7860 if available.
- Use  `--share --gradio-auth username:password` to add shared authentication
Optionally, you can provide multiple sets of usernames and passwords separated by commas (user1:pw1, user2:pw2).

->==-----**Auto-update**-----==<-
**Note:** This only applies to those who used `git clone` to install the repo, and not those who used the .zip
You can set your script to automatically update by editing `webui-user.bat`
Add `git pull` one line above `call webui.bat`
Save

->==-----**Setting Different Output Location**-----==<-
-Copy the text [Here](https://api.ipfsbrowser.com/ipfs/get.php?hash=QmYndEhuPYzqc1gYxeqKXvhXEXsa5N2UN6hewjgjSX1qhJ) and save it as `output.bat`, Move it to wherever you want your images to output to. 
Run it, and it will create the appropriate sub-folders. You can delete the .bat after this is complete.
-Go to the Settings tab of the UI and assign your new file locations accordingly. Once you’ve assigned the locations, make sure to hit **Apply Settings**
It is also recommended to enable the following setting if you want your outputs to be organized
-[x]  When writing images/grids, create a directory with name derived from the prompt

->==-----**GFPGAN**-----==<-
GFPGAN is used for correcting realistic faces, it was replaced with CodeFormer face correction which comes with the main install and is generally better. 
To install GFPGAN, download and place [**GFPGANv1.3.pth**](https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth) into the main webUI directory

->==-----**Enabling Negative Prompts**-----==<-
Negative prompts are a powerful tool to remove unwanted features and elements from your generations
**They should be enabled by default**, but if not:
- Edit webui-user.bat
- After ` COMMANDLINE_ARGS=`, add `--show-negative-prompt` to your launch parameters:
`COMMANDLINE_ARGS=--show-negative-prompt` 

##->`--PRUNING A .CKPT--`<-##
'Unpruned' models can be up to 7gb due to redundant training data,
*but it can be reduced to 3.6gb without any loss of quality*, reducing ram usage and loading time
(The original model is not lost, a new pruned copy is made)
NOTE: You should only do this after running webui-user.bat at least once
- Place the .ckpt file you wish to prune in your main `/stable-diffusion-webui` folder
- Copy https://raw.githubusercontent.com/harubaru/waifu-diffusion/main/scripts/prune.py 
Delete line **6** and **8** 
Save as `prune.py`
Save as 'all files' in your main `/stable-diffusion-webui` folder
- Edit the last line in prune.py to the name of your ckpt:
eg. `prune_it('wd-v1-2-full-emma.ckpt')` and save
- Copy and save the script for launching prune.py [**HERE**](https://api.ipfsbrowser.com/ipfs/get.php?hash=Qma1skhof6KVYMZEnaanjrfRw6M2BhmN2LQjkniWRp8Vjj)
Save it as `prune.bat` in your main `/stable-diffusion-webui` folder
Save as 'all files'
(This loads venv and torch dependencies into memory before running prune.py)
- Run prune.bat
The pruning process may take a few minutes
Afterward, you should now have a pruned .ckpt alongside your normal one

##->`--OUTPAINTING--`<-##
**(9/17)**  A new and improved outpainting script has been added to the webUI!
Make sure to use `git pull`so you can update to the latest version
To use, go to img2img and select "Outpainting mk2" from the Script dropdown menu
**~~Recommended parameters~~** (Further testing is needed)
Steps: 85-100
Sampler: Euler a
CFG Scale: 7.5
Denoising Strength: 0.8
Width: Same as source image
Height: Same as source image
Pixels to expand: 128-256
Mask Blur: 10-25
Fall-off exponent: 1-2
Color variation: 0.05
**Tips**
- Make sure your width and height are the same or close to the source image resolution, 
otherwise your outpainting results will be incoherent
- Don't feel locked into these parameters, tweaking is highly encouraged
they are just a rough approximation of what seemed to work best for me through a few minutes of testing
- The higher the mask blur, the more 'seamless' results tend to be (to an extent)
but if it's too high, deformed distortions occur

##->`--W7 HELP--`<-##
On Windows 7, you **may** get "**api-ms-win-core-path-l1-1-0.dll is missing**" as an error when trying to follow this guide.
This is because many modern programs and frameworks require a system file only present in newer versions of Windows.
Luckily, it has been backported to be compatible with W7, and can be downloaded [**HERE**](https://github.com/nalexandru/api-ms-win-core-path-HACK/releases/download/0.3.1/api-ms-win-core-path-blender-0.3.1.zip) [(Github page)](https://github.com/nalexandru/api-ms-win-core-path-HACK)
Upzip and copy the **x86** .dll into `C:\Windows\SysWOW64` and the **x64** .dll into `C:\Windows\System32` and reboot, then you should be good to go
If you do not get that error, then you do not need to do this.

##->`--X/Y Plot--`<-##
Although most features are relatively self explanatory to use, the X/Y plot script can be particularly obtuse to understand, notably the "S/R" option
-The S/R prompt Searches the whole prompt for the first entry in the the comma separated values field and Replaces all occurrences of the first word with with one entry from the values Prompt S/R field on every iteration.
-The iterations of course also happen for every value of the other type field.
-The keyword will *also* be iterated, so using something like "red, white, blue" will result in issues when your prompt also features "reddit gayfurs".

##->`--MISC--`<-##

**--OLD MODEL--**
The original v1.3 leaked model from June can be downloaded here:
https://drinkordiecdn.lol/sd-v1-3-full-ema.ckpt
Backup Download: https://download1980.mediafire.com/3nu6nlhy92ag/wnlyj8vikn2kpzn/sd-v1-3-full-ema.ckpt
Torrent Magnet: https://rentry.co/6gocs

**--OLD GUIDE--**
Voldy guide pre-Table of Contents (9/15) https://rentry.org/voldyold
The original hlky guide (replaced as of 9/8/22) is here: https://rentry.org/GUItard
Japanese hlky guide https://news.livedoor.com/article/detail/22794512/ 
The original guide (replaced as of 8/25/22) is here: https://rentry.org/kretard

->**APPROXIMATE RENDER TIME BY GPU (50 steps)**<-
![Time](https://i.ibb.co/yd7SZ32/chartthin.png)
->**SAMPLER COMPARISON**<-
![Sampler Comparison](https://i.ibb.co/vm4fm7L/1661440027115223.jpg)

-----

[Source](https://rentry.org/cputard)

##->--CPU RETARD GUIDE (GUI)--<-##
**->Stable Diffusion running on potatoes, for potatoes™<-**
->![Previewthumb](https://i.ibb.co/DCdYwmt/smallprev.png)<-
**NOTE: This is an incredibly barebones implementation of Stable Diffusion, do not expect cutting edge features**
If you have a compatible GPU which has **2-4gb Vram** or more, try the [**Voldy**](https://rentry.org/voldy) guide
For most purposes, it may be more practical to use a [web service](https://dezgo.com) or a [collab](https://colab.research.google.com/drive/1Iy-xW9t1-OQWhb0hNxueGij8phCyluOh) for Stable Diffusion
But there is something special about being able to generate on your own humble CPU
*All credit goes to bes-dev and rpyth*

- **Features**
Txt2img/img2img
Negative prompts
Prompt queueing
Upscaling
Waifu Diffusion support
- **Minimum Requirements:** 
Windows/Linux
Python 3.8.+ (included in Miniconda)
CPU compatible with OpenVINO (most CPUs)
8gb RAM (barely enough, 16gb+recommended) 

- **How fast is it?**
It may not be nearly as fast as a dedicated GPU due to memory speed bottlenecking, but it is no slouch either
For any CPU from the past 10 years, including laptop ones, it shouldn't take too much longer than a couple minutes per 512x result 
The openVINO framework is incredibly optimized and fast, especially for Intel CPUs, and will squeeze the maximum potential out of your hardware
!!! note Guide
**Step 1.** [**Install Git**](https://git-scm.com/download/win) if you do not have it already
-When installing, make sure to select the Windows Explorer integration > Git Bash

**Step 2.** (W10) Press Windows Key + I to open your control panel and  search for "Developer Mode", turning it **on**

**Step 3.** Download Miniconda [**HERE**](https://docs.conda.io/en/latest/miniconda.html). Download Miniconda 3
-Install Miniconda in the default location. Install for **all users**.

**Step 4.** Clone the repo
-Right click in your desired location and select 'Git Bash here'
-Enter `git clone https://github.com/bes-dev/stable_diffusion.openvino`
Alternatively, you can download it as a .zip [**Here**](https://github.com/bes-dev/stable_diffusion.openvino/archive/refs/heads/master.zip) and extract

**Step 5.** Open Anaconda Prompt (miniconda3).
Navigate to the `/stable-diffusion-v1-4-openvino` folder wherever you downloaded using "cd" to jump folders.
(Or just type "cd" followed by a space and then drag the folder into the Anaconda prompt.)

**Step 6.** Enter the following commands into Miniconda to set up your environment:
- `conda create --name vin python=3.9 pip`
- `conda activate vin`
- `conda install pip`
- `pip install -r requirements.txt`
- `pip install Pillow pyyaml sv-ttk`
Wait patiently while necessary resources are installed, this may take a while

**Step 7.** Download the [**pyGUI scripts**](https://www.litechan.org/liteshare/pygui-1-2-5.zip) 
Extract and copy all files within to your main `/stable-diffusion-v1-4-openvino` folder, and hit **replace** on any file conflicts

**Step 8.** Download the [**RealESRGAN upscaler**](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-windows.zip) [(linux ver)](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip)
Unzip and place the folder inside `/stable-diffusion-v1-4-openvino`
==And you're done==
!!! info Usage

**1.** Open the Miniconda prompt and navigate to `/stable-diffusion-v1-4-openvino` like before
**2.** Type `conda activate vin` (You will need to do this every time you run the script)
**3.** Type `python pygui.py`

==FIRST TIME SETUP==
Go to Settings -> Configure in the GUI
-Hit **[?]** to open file browser and and link the RealESRGAN executable by hitting 'open'
-Link the your **demo.py** file from the openvino folder the same way
-Add the path to your Python executable, it should be `C:\ProgramData\Miniconda3\python.exe`
-Hit save 

==GENERATION==
- Go to Queue -> Add Item to enter a new prompt
- Or Queue -> Restore Item to load your last entered prompt
**Prompt:** Keywords describing what you want, be descriptive for best results
**Unprompt:** Keywords describing what you *don't* want in your image
**Output:** Output path and name of your output .png
**Image:** Img2Img, select an image file to create variants of it
**Steps:** How many iterations should be done for the output. More = better. **35-55** is the sweet spot. >75 is overkill
**Seed:** Seed for the output, randomized by default
**Upscale:** Choose how you want your image upscaled
**Config:** Save info about your output 

!!! info Links/Notes
- If you are getting Python version errors with 3.10 and don't want to have conflicting installations, try the portable [**Winpython 3.9**](https://github.com/winpython/winpython/releases/download/4.3.20210620/Winpython64-3.9.5.0dot.exe)
- You can queue up **Multiple** different prompts to run one after another. 
This can be very convenient since you don't need to wait foran output to finish to enter a new prompt)
- If you don't select an output folder, they will be output in /appdata/local/tmp. Hit 'save as' so you don't lose them)
- If your outputs are or become **unusually slow** (10-15+ minutes), 
it's likely that your RAM limit was exceeded and SD is using the swap partition on your drive as makeshift RAM. (Common issue with 8gb)
Close all other programs and free up more memory
- [Stable Diffusion openVINO Github](https://github.com/bes-dev/stable_diffusion.openvino)
- [Stable Diffusion openVINO page](https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino)
- [Litechan page](https://www.litechan.org/ran/67)
- [Progrock upscaler (compatible with openVINO](https://github.com/lowfuel/progrock-stable)

**--SPEED PER RESULT--**
(Intel(R) Core(TM) i5-8279U)	    **7.4 s/it**	==3.59 min== 
(AMD Ryzen Threadripper 1900X)	**5.34 s/it**	==2.58 min==
(Intel(R) Xeon(R) Gold 6154 CPU)  **1 s/it**	   ==33 s==

-----

[Source](https://rentry.org/sdupdates)

# SD RESOURCE GOLDMINE

!!! danger PSA, WATCH YOUR TEMPS AND INCREASE COOLING FOR THEM AND UNDERVOLT IF YOU CAN, THERE HAVE BEEN REPORTS OF FRYING GPUS BECAUSE THEY WERE TOO HOT

!!! info todo:
	Prompt Cheat Sheet Rentry: WIP
	clean up rentry

	Where am I tracker: busy

	By anon: Pro-tip, uploading the .txt that is alongside the grids will conveniently paste it in your post

Quicklinks: 
* News: https://rentry.org/sdupdates#newsfeed
* FAQ: https://rentry.org/sdupdates#common-questions-ctrlcmd-f
* Prompting: https://rentry.org/sdupdates#prompting
* Link Dump: https://rentry.org/sdupdates#rentrys-link-dump-will-sort
* Hall of Fame: https://rentry.org/sdupdates#hall-of-fame

Last update: 12:30 am UTC

## NEWSFEED
>10/11
* Easy to setup booru by booru anon, might be pickled: https://github.com/demibit/stable-toolkit
	* planned to be open source in about a week
* by anon: I think they backpedaled a bit, offered to unban automatic. Offered to give control of community places back to the community.
* automatic1111's repo removed from pinned guide on r/stablediffusion
* all old mods on stable diffusion subreddit kicked, replaced by stabilityai members. Big discourse on corruption and true open-source training
* Can now train hypernetworks, git pull and find it in the textual inversion tab
	* Sample (bigrbear): https://files.catbox.moe/wbt30i.pt
* anon (might be wrong): xformers now works on a lot of cards natively, try a clean install with --xformers
* Early Anime Video Generation, trained by creator of WD (i think)
	* Colab: https://colab.research.google.com/drive/14xl37LceSXhdc5u7v5uL0bk09BpAL7CJ?usp=sharing
	* Models: https://huggingface.co/chavinlo/anime-video-diffusion
	* Code: https://github.com/chavinlo/video-diffusion-pytorch

>10/10
* new unpickler for new ckpts: https://rentry.org/safeunpickle2
* ~~HENTAI DIFFUSION MIGHT HAVE A VIRUS~~ confirmed to be safe by some kind people 
	* github taken down because of nude preview images, hf files taken down because of complaints, windows defender false positive, some kind anons scanned the files with a pickle scanner and and it came back safe
	* automatic's repo has security checks for pickles
	* anon scanned with a "straced-container", safe
* NAI's euler A is now implemented in AUTOMATIC1111's build
	* git pull to access
	* https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2017#discussioncomment-3840764
	* Tutorial: https://boards.4chan.org/h/thread/6893903#p6894236
* New open-source (?) generation method revealed making good images in 4 steps
	* Supposedly only 64x64, might be wrong
* Discovered that hypernetworks were meant to create anime using the default SD model

>10/9
* Full NAI frontend + backend implementation: https://desuarchive.org/g/thread/89095460#89097704 (PICKLE??, careful might actually be pickled)
	* 1:1 recreation, is NAI ran locally (offline NAI)
	* 8GB VRAM required
	* has danbooru tag suggestions, past generation history, and mobile support (from anon)
* Unlimited prompt tokens
* NAI 1:1 Recreation for Euler (ASUKA, https://desuarchive.org/g/thread/89097837#89098634 https://boards.4chan.org/h/thread/6887840#p6888020)
	* detailed setup guide: https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2017
	* Anon: If you are trying to match the Asuka, also know that you will get minor variations if you are using an optimization such as lowvram or medvram or xformers
* xformers working for 30s series and up, anything below needs tinkering (https://rentry.org/25i6yn) 
	* Use --xformers to enable for 30s series, --force-enable-xformers for others
* Deepdanbooru integrated: Use --deepdanbooru as an argument to webui-user.bat and find the interrogation change in img2img
* CLIP layer thing integrated, check settings after update
* v2.pt working
* VAE working
* Full models working

## Common questions (CTRL/CMD + F):

How do you add embeddings?
>Make a folder in your webui install (next to webui-user.bat) named embeddings > put your .pt and .bin embedding files here

Why are my faces blurry/messed up/ugly/deformed/etc.?
>Could be a variety of things. To fix this, try generating at a higher resolution, using hires fix, inpainting your face, inpainting your face at full resolution, editing a good face on top of your face and img2imging, adding pretty face (or some variant) to the positive prompt and ugly face (or some variant) to the negative prompt, and making the ai focus more on the face with a closer shot.

What is textual inversion?
>ai brute forces tags that it thinks matches your imgs and creates an embedding. doing this on a subject in many areas generally allows the ai to create better embedding

Stuff doesn't work/is outdated!
> git pull or just do a fresh install by git cloning into another folder. can also git reset --hard [commit id]. careful of overwriting your outputs/embeddings/models

What is ENSD?
>eta noise seed delta in settings

IS IT SAFE?
>dunno, no one got pickled yet so take that as you will. do you want to create tons of pictures you can only dream of or stay behind the picklewall because of security concerns? Only you can decide that

Help! I need a prompt and I don't know where to start
>Find a prompt someone else used and repurpose it for yourself. Think if what you like and just start writing tags/descriptions. If you need a tag but don't know the Danbooru equivalent, you can usually find it by searching danbooru [write what tag you want here]

How do I make better pictures?
>for a general workflow:
1. paint something really crude, it can literally be blobs of color
2. img2img with a prompt
3. edit original img or prompt or output input
4. reimg2img/inpaint
5. repeat last few steps until you get what you want

>step 1 can be replaced with just starting with a txt2img if you want the AI to decide for you

What is no-half and full precision?
>Most new GPUs will use half precision since it lowers VRAM. Only use no-half and/or full-precision if you want to get the absolute best quality (minor difference) or if you are running a 16xx card.

How to inpaint?
* Good guide: https://rentry.org/drfar
* TLDR: Mask, describe ONLY the part you're inpainting, generate

Why doesn't inpainting work?
* Try running in incognito/private browsing mode, adblockers and certain plugins/extensions break inpainting
* Try refreshing

How do you get NAI (NovelAI) 1:1?
> https://boards.4chan.org/h/thread/6893903#p6894236
1. git pull to update
2. reset sigma noise / strength to the default value of 1 (no need to use 0.69 / 0.67)
3. set eta noise seed delta to 31337

> https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2017#discussioncomment-3834864

Does order of prompts matter?
>Yes, the order = priority that the AI will put in your img

How do I setup NAIFU?
>read the text file that tells you how to in the download

>By anon: (Windows):
1) Make sure you install Python and check "Add Python to PATH": https://www.python.org/downloads/windows/
2) Download the naifu torrent from this link:https://rentry.org/sdg_FAQ#naifu-novelai-model-backend-frontend.
3) Inside of the naifu folder, right click program.zip and click "extract here" with 7zip or WinRAR.
4) Run setup.bat and let it finish.
5) Run run.bat and once it's running, open a new browser window/tab and make sure that you type in http://localhost:6969/ into the address bar.
6) Bada bing bada boom you should have the site running locally on your PC.

What upscaler should I use?
> I recommend SD Upscaler, it adds details as well as upscales. For a while LSDR was regarded as the best, this might've changed though. some anons like swinir, some like esrgan4x, ymmv

How do I know if X is loaded?
>Ususally, the console will tell you. It will not tell you if hypernetworks or v2.pt is loaded

How do I update?
>open command prompt in auto's folder and type "git pull". Or, right click in the folder, git bash here, git pull. To make sure you have the requirements, run "pip install -r requirements.txt" in the same fashion.

Recommended Settings?
>NAI: Clip Skip 2, no hypernetworks, no v2, no yaml, load the VAE, everything else is up to you
* default NAI negatives: nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry
	* Supposedly adding "artist name" into here improves results
* Default NAI settings: "steps": 28, "sampler": "[sampler]", "seed": [seed], "strength": 0.69, "noise": 0.667, "scale": 11.0,
	* Strength and noise are eta and sigma
	* Scale = CFG scale
* Prefix all prompts with masterpiece, best quality
	* Apparently NAI adds another hidden "masterpiece" after "best quality", but this might've been debunked already
>Other stuff: Clip skip 0, everything else is good (dunno about hypernetworkds, v2, yaml, VAE)
* Hands: writing "in the style of Serpieri" seems to increase hand quality (test more)

What are (parentheses), [brackets], {this thing}, <>, and decimals?
>() is more emphasis, [] is less emphasis, {} is NAI's "implementation" of (), <> is for embeddings, decimals specify the number of ()'s so you don't need to type in a bunch.

>(boobs) would have more weight than [boobs] in the final result, (boobs:1.4) would increase the boobage by ~40% more than what they would've normally been, (boobs:0.6) will decrease it by ~40%. 
	If using multiple (parenthesis) instead of decimals, is changed by a multiplier of 1.1 with each new parenthesis
	>(n) = (n:1.1)
	>((n)) = (n:1.21)
	>(((n))) = (n:1.331)
	>((((n)))) = (n:1.4641)
	>(((((n)))) = (n:1.61051)
	>((((((n)))))) = (n:1.771561)

	[n] = (n:0.9090909090909091)
	[[n]] = (n:0.8264462809917355)
	[[[n]]] = (n:0.7513148009015778)
	[[[[n]]]] = (n:0.6830134553650707)
	[[[[[n]]]]] = (n:0.6209213230591552)
	[[[[[[n]]]]]] = (n:0.5644739300537775) 

>([prompt]:[number less than 1]) = [using this syntax], not sure how decimals work with this syntax

How do you escape/use () for series names (or whatever is in () that isn't supposed to be weighted) in prompts?
* https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#prompt-editing
* character_\(series\)

What is prompt editing?
* https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#prompt-editing
	* Example: a [fantasy:cyberpunk:16] landscape
    At start, the model will be drawing a fantasy landscape.
    After step 16, it will switch to drawing a cyberpunk landscape, continuing from where it stopped with fantasy.
* Loads one prompt for x steps, then runs the next prompt
* If the number is between 0 and 1, it's a fraction (percentage) of the number of steps after which to make the switch. If it's an integer greater than zero, it's just the step after which to make the switch.

What is AND?
>AND combines prompts together:
>* Metaphor version: P1 AND P2 AND P3 for 10 steps = P1 step 1, P2 step 2, P3 step 3, P1 step 4, etc... P1 step 10. It's good for combining two different prompts together. Needs more research to see what else it can do. There's also the [P1:P2:[step # to change from P1 to P2]] syntax, which might give you better results (good for creating a base with P1 and adding details with P2)
> Technical: https://energy-based-model.github.io/Compositional-Visual-Generation-with-Composable-Diffusion-Models/

> By kind anon: each prompt creates a "guidance" vector saying how to change the image to "match" the prompt, whatever that is, and AND makes you have TWO prompts pulling the image in different directions (that get added together)

What are negative prompts?
>By kind anon: this is also how negative prompts work-- it computes how to change the image to go towards the negative prompt, and SUBTRACTS that to move away from it
* Contrast this to positive prompts, which calculates how much each step should move toward the positive prompt. Adding weights increases how much towards (or past) the positive prompt the AI will travel

What's my best option if I want to imitate a specific artstyle?
>You could try finding someone similar, doing textual inversion, or describing the artsyle (eg thick stroke, lineart, etc.)

What are hypernetworks, VAE, v2.pt, etc? 
>Hypernetworks are like styles for your generation

>VAE's fix faces and eyes, is generally good, but seems to dull colors
>* Disable if training

>v2.pt censors and generally changes the whole composition. a lot of people don't like it

>yaml doesn't seem to do anything except double ram usage

What is Deep Danbooru?
>Deep Danbooru is an autotagger. The AI automatically finds Danbooru tags that it thinks matches the picture it's given. To activate it
1. git pull, edit webui-user.bat
2. add the --deepdanbooru argument to webui-user.bat so it looks like COMMANDLINE_ARGS=--deepdanbooru
3. find the interrogation change in img2img.

How do I get NAIFU to automatically save images for me?
>Edit run.bat. Ctrl + f to "export SAVE_files". Remove the "::" and change the word from export to set.

How do you load the VAE?
>Rename it to [your model's name here].vae.pt and put it next to your model in the models/Stable-diffusion folder

How do you load hypernetworks?
>create a hypernetworks folder in the models folder and place all the .pt files there

How do you load the v2.pt?
>place the v2.pt in the same folder as your webui-user.bat file (the root folder) and add https://rentry.org/nai-prior-v2 into your scripts folder (rename the text file to [anything].py

How do you load the yaml?
>It's not recommended to load the yaml because it doubles ram for no change in output, but if you really want to, rename it to [model name].yaml and place it next to your model

What are wildcards?
>by anon: wildcard just lets you create a text file with a list of prompt words, and then you reference that text file to randomly pick from it, so you could randomize hair color, or pose, specific character, etc

Where do you get wildcards?
>Got this info from a kind anon in hdg: Search archive or git for wildcard pastebin and copy what you want. Then, download wildcards.py from AUTOMATIC1111's wiki. Place script + pastebin text files (which are in a folder named wildcards, the text files are named [wildcard name here].txt) in /scripts. Activate wildcards in AUTO's gui. In a prompt, you would write __[wildcard name here]__ to choose a random name from that txt file. To use weights: (__[wildcards name here]__:[weight amount]) 
* Example wildcards: https://github.com/jtkelm2/stable-diffusion-webui-1/tree/master/scripts/wildcards
* Wildcard dump by anon: 
	* faces https://rentry.org/pu8z5
	* focus https://rentry.org/rc3dp
	* poses https://rentry.org/hkuuk
	* times https://rentry.org/izc4u
	* views https://rentry.org/pv72o

* Dump 2: check links

What is interpolation when merging models?
>It determines how much of each model is in the output model. if number is 40 for linear: 40% primary, 60% secondary. If number is 40 for sigmoid or inverse sig, this percent is weighted according to the graphs. sigmoid: primary checkpoint gets less weight than if using weighted sum. inverse sigmoid: opposite to sigmoid
* https://archived.moe/g/thread/89007676#89008490

Can you make X?
>If you're creative enough, probably. If it was trained on that, definitely

## Prompting
Tags: https://danbooru.donmai.us/tags

Positive:
* Biggest tip: just write what you want. the AI will generally understand and create it
* NAI's default (generally good) positive prompts to add at the beginning of all prompts: masterpiece, best quality
	* can swap best for highest, high, etc.
* Group the things that you want that are similar together (e.g. things relating to body type, things relating to clothing, etc.), and put these groups in order of most important to least important
	* Anon's order: 
	>the picture's quality
	>the picture's subject
	>their physical appearance
	>their emotion
	>their clothing
	>their pose
	>the picture's setting
* "Anime screencap" creates scenes from an anime
* from anon: to use character (franchise), you have to format it as character \(franchise\) 
* the tokenizer struggles to parse underscores, ymmv

Negative:
* NAI's default (generally good): nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry


Camera Angles:
* https://danbooru.donmai.us/wiki_pages/tag_group:image_composition

Hair Styles:
* https://danbooru.donmai.us/wiki_pages/tag_group%3Ahair_styles

Booru tag scraping: 
* https://sleazyfork.org/en/scripts/451098-get-booru-tags 
	* script to run in browser, hover over pic in Danbooru and Gelbooru
* https://rentry.org/owmmt 
	* another script 
* https://pastecode.io/s/jexs5p9c
	* another script, maybe pickle
	* press tilde on dan, gel, e621 
* https://textedit.tools/
	* if you want an online alternative
* https://github.com/onusai/grab-booru-tags
	* works with e621, dev will try to get it to work with rule34.xxx
	* https://pastecode.io/s/jexs5p9c

Embeddings:
* Text Tutorial: https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion
	* Make sure to use pictures of your subject in varied areas, it gives more for the AI to work with
* Tutorial 2: https://rentry.org/textard
* Embeddings + Artists: https://rentry.org/anime_and_titties (https://mega.nz/folder/7k0R2arB#5_u6PYfdn-ZS7sRdoecD2A)
* Random embedding I found (pickler?): https://ufile.io/c3s5xrel
* Embeddings: https://rentry.org/embeddings
* Henreader embedding, all 311 imgs on gelbooru, trained on NAI: https://files.catbox.moe/gr3hu7.pt (rename as henreader.pt)
* Kantoku (NAI, by anon, might be pickled, if dled, renamed to Kantoku.pt): https://files.catbox.moe/j4acm4.pt
* Asanagi (NAI, anon, might be pickled, rename): https://files.catbox.moe/xks8j7.pt
	* Asanagi trained on 135 images augmented to 502 for 150296 steps on NAI Anime Full Pruned with 16 vectors per token with init word as voluptuous
	* training imgs: https://litter.catbox.moe/2flguc.7z
* Imp midna (NAI, 80k steps recommended by anon, might be pickled): mega.nz/folder/QV9lERIY#Z9FXQIbtXXFX5SjGf1Ba1Q
* imp midna 2 (anon, might be pickled): mega.nz/file/1UkgWRrD#2-DMrwM0Ph3Ebg-M8Ceoam_YUWhlQWsyo1rcBtuKTcU
* automatic's secret embedding list: https://gitlab.com/16777216c/stable-diffusion-embeddings

Hypernetworks:
* anon: "Requires extremely low learning rate, 0.000005 or 0.0000005"
* bigrbear: https://files.catbox.moe/wbt30i.pt

Wildcards:
* https://desuarchive.org/g/thread/89006003#89007479
* https://rentry.org/sdWildcardLists
* Guide (ish): https://is2.4chan.org/h/1665343016289442.png 

Some artists (may or may not work with NAI):
* SD 1.5 artists (might lag your pc): https://docs.google.com/spreadsheets/d/1SRqJ7F_6yHVSOeCi3U82aA448TqEGrUlRrLLZ51abLg/htmlview#
* pre-modern art: https://www.artrenewal.org/Museum/Search#/

Creating fake animes:
* https://rentry.org/animedoesnotexist

1:1 NAI/Novel AI Cheatsheet:
* 1:1 NAI cheatsheet by anon:
	* Use unpruned/full model
	* Load with ema weights (use .yaml config from base stable-diffusion, set use_ema to true) (minor)
		* Doubles ram if i remember correctly
		* "I copied the one from this path (which is what voldy defaults to if one isn't specified):
/repositories/stable-diffusion/configs/stable-diffusion/v1-inference.yaml

			And then on line 18 I set use_ema to True, and put that copy into the models folder with the correct name (name of model.yaml)."
	
	* CLIP layer = 2
	* If using Euler a, eta noise seed delta = 31337
	* If prompt has weights, manually adjust the weight accordingly (voldy uses 1.1, NAI uses 1.05)
	* Use --no-half argument (minor)

## Rentrys + Link Dump, will sort:
TLDR of everything: https://rentry.org/sd-tldr

Info:
* 1:1 setup NAI + current news: https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/2017
* SD NAI FAQ: https://rentry.org/sdg_FAQ
* general wiki: https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki
* general wiki 2: https://wiki.installgentoo.com/wiki/Stable_Diffusion
* setup guide: https://rentry.org/voldy
* Easy to setup Standard Diffusion: https://nmkd.itch.io/t2i-gui
* Models: https://rentry.org/sdmodels

Boorus:
* Danbooru: danbooru.donmai.us/
* Gelbooru: https://gelbooru.com/
* AIBooru: https://aibooru.online/
* Booru Site: https://infinibooru.moe/
* Local: hydrusnetwork.github.io/
* AI art here: https://e-hentai.org/g/2343153/b4ce2a4b0b
* Easy to setup booru by anon, might be pickled: https://github.com/demibit/stable-toolkit

Upscalers:
* Big list: https://upscale.wiki/wiki/Model_Database

Part 1 NAI (with all the trackers I can find):

``` python
magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc&dn=novelaileak&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt.oiyo.tk%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce
```
Part 2 NovelAI Leak: https://rentry.org/ewahd

not sure what this is: https://rentry.org/naifunya
UNPICKLER: https://rentry.org/safeunpickle2
Prebuilt xformers: https://rentry.org/25i6yn
img search: https://iqdb.org 

learn ai (recommended by emad): https://www.fast.ai/

## Hall of Fame
(will update later, busy rn)
AUTOMATIC1111/Voldy: Best webui, for the people, madlad gigachad
Asuka anon: Large 1:1 NAI efforts before all the updates
Booru anon: Self-hostable, intuitive, easy to setup booru


people to find: testers + prompters that want to contribute
author: questianon !!YbTGdICxQOw (malt#6065), ping or tag if I need to change anything or if you have questions

-----

[Source](https://rentry.org/sdg_FAQ)

# FAQ
[TOC3]


#### How do I setup the leaked NovelAI model?
0. Download the leak:
`magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc&dn=novelaileak&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce`
1. Move one of the model files (model.ckpt) from stableckpt to webui/models/Stable-diffusion
	- Feel free to rename it
2. Move stableckpt/animevae\.pt to webui/models/Stable-diffusion and rename it to be the same name as your NovelAI model but with .vae.pt
	- Note: optional, it may be worth experimenting with/without vae as sometimes non-vae results can be better
3. Move stableckpt/modules/modules/\*.pt (anime\.pt, anime_2\.pt, etc) to webui/models/hypernetworks
	- Create the directory if it does not exist
4. Launch the webui and the model should appear with the others in the settings

Notes: According to anon, NovelAI uses CFG scale of 11 to generate their stuff.
NovelAI's default negative prompt:
lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry

==Leak pt2== (not required, including it here just for those that are interested):
https://pastebin.com/6wX7Bx7w

#### NAIFU: NovelAI model + backend + frontend
From an anon (>>>/g/89097704):
>Runs on Windows/Linux on Nvidia with 8GB RAM. Entirely offline after installing python dependencies.
>Web frontend is really good, with danbooru tag suggestions, past generation history, and mobile support.
>`magnet:?xt=urn:btih:4a4b483d4a5840b6e1fee6b0ca1582c979434e4d&dn=naifu&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce`

Looks like it comes with some of the same models/hypernetworks from the first leak, so if you already downloaded that you can save yourself some time.

See the README.txt in the torrent for setup/usage instructions.
Extract it like this: https://imgur.com/a/gvUCiCy.gif
###### Using a different model in NAIFU
1. Copy the directory of the one you want from stableckpt (the first leak) into the models folder alongside animefull-final-pruned
	- you can skip moving files around and just do the next step, but make sure you use the absolute path to the model's directory
2. Edit run\.bat or run\.sh and change MODEL_PATH to point to the directory that contains the model you want
3. Restart NAIFU to load the new model

You can also run non-NovelAI models as long as you edit the run script and point to a directory that contains a model named "model.ckpt", and a "config.yaml" file. I don't know what changes you might need in the yaml file but just copying one from the other NovelAI models seemed to work fine.


#### xformers (increase your it/s) (MORE CARDS SUPPORTED)
!!! warning
    Make sure you `git pull` to the latest webui version first
!!! note
	Pascal, Turing and Ampere are now supported automatically just by using --xformers as of Oct 10th. 
Using xformers will affect your generated images somewhat.

If you are running an Pascal, Turing and Ampere (1000, 2000, 3000 series) card
Add `--xformers` to COMMANDLINE_ARGS in webui-user.bat and that's all you have to do.

If you are running an older card you need to build xformers yourself and force the webui to accept it.
!!! danger
	Some anons have reported significantly worse performance with xformers on 700 and 900 series cards, consider this before you proceed

Add `--force-enable-xformers` to COMMANDLINE_ARGS in webui-user.bat, then either use a prebuilt xformers or build it yourself

###### Prebuilt xformers
1. Download the .whl for your GPU from https://mega.nz/folder/f1UAyaLL#50Sq07s18kC3Tn095LZ8zQ
	- GTX 900 series = 5.2
	- You can double check with https://developer.nvidia.com/cuda-gpus under CUDA-Enabled GeForce and TITAN Products
2. Place it in the webui folder
3. Open up cmd prompt or bash in that folder
4. `venv\Scripts\activate.bat` or `source ./venv/bin/activate`
5. `pip install xformers-0.0.14.dev0-cp310-cp310-win_amd64.whl`

If the .whl isn't available for your GPU architecture you will need to build it yourself, or obtain the .whl from someone else who has built it for your architecture.

###### Building xformers
!!! danger
	If the path to your webui folder at all long (like 40-50 characters idk exact number), you will run into major problems. See the **Common problems** section below
Make sure your **Python version is 3.10 or later**
`python --version`
Install **CUDA Toolkit 11.3** https://developer.nvidia.com/cuda-11.3.0-download-archive
Install **Build Tools for Visual Studio 2022** https://visualstudio.microsoft.com/downloads/?q=build+tools#build-tools-for-visual-studio-2022 (You only need Desktop development with C++)

Open up cmd prompt/bash

Confirm nvcc is available
`nvcc --version`

Go to the webui directory
`cd C:\path\to\SD\stable-diffusion-webui`

Download xformers repo
`cd repositories`
`git clone https://github.com/facebookresearch/xformers.git`
`cd xformers`
`git submodule update --init --recursive`

Create venv and activate
`python -m venv venv`
Depending on where you're running from (cmd prompt, powershell, bash), run either
`venv\Scripts\activate.bat` or `source ./venv/bin/activate`

To avoid issues with getting the CPU version, install pyTorch seperately
`pip install torch torchvision --extra-index-url https://download.pytorch.org/whl/cu113`

Install the rest of the dependencies
`pip install -r requirements.txt`
`pip install wheel`
`pip install ninja`

Force enable CUDA to be built with MS Build Tools 2022
cmd prompt: `set NVCC_FLAGS=-allow-unsupported-compiler`
bash: `export NVCC_FLAGS=-allow-unsupported-compiler`
For the next part you need to set TORCH_CUDA_ARCH_LIST so it uses your architecture. Grab your GPU arch from these lists: https://developer.nvidia.com/cuda-gpus (consumer GPUs will be under CUDA-Enabled GeForce and TITAN Products)
For example, if your GPU is a GTX 1070, based on that list the architecture is 6.1 and the command would be:
`set TORCH_CUDA_ARCH_LIST=6.1`

Set it for your architecture:
cmd prompt: `set TORCH_CUDA_ARCH_LIST=<YOUR ARCH>`
bash: `export TORCH_CUDA_ARCH_LIST=<YOUR ARCH>`

Build xformers
`python setup.py build`
This may take a long time.

Build the .whl
`python setup.py bdist_wheel`

Copy the resulting .whl file to the webui folder
`copy dist\xformers*.whl ..\..\`

Activate the webui venv
`cd ..\..`
`venv\Scripts\activate.bat` or `source ./venv/bin/activate`

`dir xformers*` or `ls xformers*`
Copy the full name of the .whl
And install it
`pip install <FULL .whl FILENAME>`

Then you should be good to go.

######Common problems
>Filename too long
> or
>fatal error C1083: Cannot open compiler generated file: '': Invalid argument
>    error: command 'C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.3\\bin\\nvcc.exe' failed with exit code 4294967295
Windows problem with path lengths.

Move your stable-diffusion-webui folder higher up and/or shorten its name.
For example, either of these should be fine unless you have a really long username:
C:\stable-diffusion-webui\
C:\Users\<name>\sd-webui\

> RuntimeError: CUDA error: no kernel image is available for execution on the device
More GPU architectures are now automatically supported, try running a clean install and just use the flag --xformers

**If you move this then you will have to delete the venv directory inside** (run webui-user.bat again to recreate it), or deal with moving it [manually](https://stackoverflow.com/questions/32407365/can-i-move-a-virtualenv)

> ./venv/bin/activate: No such file or directory
If you are using bash on Windows, source from Scripts.
`source ./venv/Scripts/activate`

>If you encounter some error about torch not being built with your cuda version blah blah, then try:
`pip install setuptools==49.6.0`


#### What does ()/[]/{} or (word:number) mean?
() adds emphasis to a term, [] decreases emphasis, both by a factor of 1.1. You can either stack ()/[] for increasing/decreasing emphasis or use the new syntax which takes a number directly - it looks like this:
(word:1.1)  == (word)
(word:1.21) == ((word))
(word:0.91) == [word]
To use literal ()/[] in your prompt, escape them with \
See https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features for full details and additional features.

{word} is for NovelAI's official service only. It is similar to (word) but the emphasis is only increased by a factor of 1.05. If you are using the leaked models in the webui you shouldn't be using this syntax.

#### float16 vs. float32?
float32 for older gpus or if you want 100% precision. The outputs of both should be nearly identical, the main difference is size and the gpus that support it.

#### What does model1+model2 (WD+yiffy/50% SD + 50% WD) mean?
Refers to merged models, see the "Checkpoint Merger" tab in the webui.

#### What is the best model?
It depends the type of stuff you want to generate. Generally just grab the latest model/highest epoch of the type you want in https://rentry.org/sdmodels

#### AND syntax
For now, see https://energy-based-model.github.io/Compositional-Visual-Generation-with-Composable-Diffusion-Models/
