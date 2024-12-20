---
title: 【转载】NovelAI模型泄露部署教程
date: 2022-10-12
tags: NovelAI 机器学习 版权争议 转载
categories: article
---

[Source](https://rentry.org/voldy)

->![Voldy Retard GUide](https://i.imgur.com/UGv9AjV.png)<-
->`The definitive Stable Diffusion experience ™`<-
->(Special thanks to all anons who contributed)<-
**->[---FEATURE SHOWCASE & HOWTO---](https://github.com/AUTOMATIC1111/stable-diffusion-webui-feature-showcase)<-**

==[**SD News**](https://rentry.org/sdupdates3)==
==[**Japanese guide here 日本語ガイド**](https://gigazine.net/news/20220907-automatic1111-stable-diffusion-webui/)== [(JP Resources)](https://rentry.org/zqr4r)
==**[NovelAI FAQ](https://rentry.org/sdg_FAQ)**==
(3/21/23):
Interested in LoRA training? Try the [Quickstart LoRA Guide](https://rentry.org/ezlora)

[TOC]
**Minimum requirements:**  
-16gb ram
-Nvidia Maxwell (GTX 7xx) or newer GPU with **at least** 2gb vram
-Linux or Windows 7/8/10+
-20gb disk space
#->`--GUIDE--`<-#

**==Step 1:==** [**Install Git**](https://github.com/git-for-windows/git/releases/download/v2.37.3.windows.1/Git-2.37.3-64-bit.exe) [(page)](https://git-scm.com/download/win)
-When installing, make sure to check the box for 'Windows Explorer integration -> Git Bash'

**==Step 2:==** Clone the WebUI repo to your desired location:
-Right-click anywhere and select 'Git Bash here'
-Enter `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui`
(Note: to **update**, all you need to do is is type `git pull` within the newly made webui folder)

**==Step 3:==** Download your preferred model(s):

##### ==Official Stable Diffusion==

![SD](https://i.imgur.com/MfgRTGt.jpeg)
_The basis for it all, will perform decently for a wide variety of subjects
However, for many purposes you may find vanilla SD lagging behind it's competitors_
(\*Note: **1.5** produces [**much better results**](https://www.assemblyai.com/blog/stable-diffusion-1-vs-2-what-you-need-to-know/) than **2.0** and **2.1\***)

| [**SD 1.4**](https://drive.yerf.org/wl/?id=EBfTrmcCCUAGaQBXVIj5lJmEhjoP1tgl) | [**SD 1.5**](https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt) |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |

| [**SD 2.0**](https://huggingface.co/stabilityai/stable-diffusion-2/resolve/main/768-v-ema.ckpt)                             | [**SD 2.1**](https://huggingface.co/webui/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned-fp16.safetensors) |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [(.yaml)](https://raw.githubusercontent.com/Stability-AI/stablediffusion/main/configs/stable-diffusion/v2-inference-v.yaml) | [(.yaml)](https://huggingface.co/webui/stable-diffusion-2-1/resolve/main/v2-1_768-ema-pruned-fp16.yaml)           |

##### ==Alternate Models/Mixes (Recommended)==

| [**-Deliberate-**](https://civitai.com/api/download/models/5616) | [**-Dreamshaper-**](https://civitai.com/api/download/models/5636) |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![D](https://i.imgur.com/xctGltN.jpg)                            | ![S](https://i.imgur.com/fMUQH0V.jpg)                             |
| Powerful All-purpose Model, Stylized Art & Realism Focus         | Oil Painting-like Portraits, Fantasy art, Scenery                 |

| [**-AOM3-**](https://civitai.com/api/download/models/11811) | [**-WaifuDiffusion-**](https://huggingface.co/hakurei/waifu-diffusion-v1-4/resolve/main/wd-1-4-anime_e2.ckpt) |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![A](https://i.imgur.com/CHTowTy.jpeg)                      | ![W](https://i.imgur.com/HYQWzWT.png)                                                                         |
| _A fan favorite anime model mix, highly versatile_          | _A model trained on heaps of Danbooru images_                                                                 |

-> _(Many more models can be found on [CivitAI](https://civitai.com/))_ <-

**==Step 4:==** Rename your .ckpt or .safetensors file file to "model.ckpt" or "model.safetensors", and place it in the `/models/Stable-diffusion`folder -_You can have as many models as you want in the folder, "model" is just the one it will load by default_

**==Step 5:==** [**Install Python 3.10**](https://www.python.org/ftp/python/3.10.6/python-3.10.6-amd64.exe) [(Windows 7 ver)](https://github.com/adang1345/PythonWin7/raw/master/3.10.6/python-3.10.6-amd64-full.exe) [(page)](https://www.python.org/downloads/windows/)
-Make sure to choose "**add to PATH**" when installing

**==Step 6== (Optional):**
This reduces VRAM, and allows you to generate at larger resolutions or batch sizes for a <10% loss in raw generation speed
(For me, singular results were slightly slower, but generating with a batch size of 4 made each result **25% faster** on average)
This is recommended for _most_ users
-Edit `webui-user.bat`
-Change `COMMANDLINE_ARGS=` to `COMMANDLINE_ARGS=--medvram`

**==Step 7:==** Launch `webui-user.bat`, Open it as normal user, **not** as administrator.

- Wait patiently while it installs dependencies and does a first time run.
  It may _seem_ "stuck" but it isn't. It may take up to 10-15 minutes.
  ==And you're done!==

!!!note Usage

- Launch webui-user.bat
- After loading the model, it should give you a LAN address such as **'127.0.0.1:7860'**
- Enter the address into your browser to enter the GUI environment
  Tip: Hover your mouse over UI elements for tooltips about what they do
- To exit, close the CMD window

#->`--NOVELAI SETUP--`<-#
_Provided in service to freedom of information, testing and research_
_If you enjoy your results, consider [**subscribing**](https://novelai.net/register)_

**Step 1:** Follow the main guide above
-(Ignore steps **3** and **4** if you _only_ plan on using the NovelAI model)
Open a git bash by right-clicking inside your main stable diffusion webui folder and type `git pull`to make sure you're updated

**Step 2:** Download a [Torrent Client](https://www.qbittorrent.org/download.php) if you don't have one already
-Add the following Magnet link:
[magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc](magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc) -**Deselect** everything except for the the ` /animefull-final-pruned` subfolder (under /stableckpt), **and** `animevae.pt`
-(Optional: select desired **.pt** hypernetworks in the `/modules` subfolder (_These are **not** used by default in NAI but can provide unique results_)

**Step 3:** Once finished, **rename** the following files you torrented like so:
`animevae.pt` **>>** `nai.vae.pt`
`config.yaml` **>>** `nai.yaml`
`model.ckpt`**>>** `nai.ckpt`

**Step 4:** Place **all 3** files into `/stable-diffusion-webui/models/Stable-diffusion`

**Step 5 (Optional):** If you want to launch NovelAI by default, do the following
-Edit webui-user.bat in notepad and add the NAI .ckpt:
`COMMANDLINE_ARGS=--ckpt nai.ckpt`
Otherwise, you can just select it within the WebUI dropdown

!!!info Replicating NovelAI defaults
It is possible to create outputs **identical** to NovelAI's current subscription service by doing the following:

==Standard (Euler)==
-Set the sampler to **Euler** (Not Euler A)

-Use **28** Steps

-Set CFG Scale to **11**

-Use **masterpiece, best quality** at the beginning of all positive prompts

-Use **nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name** as the negative prompt
(nsfw is optional, and toggled on the site)

-In the Settings tab, change **Ignore last layers of CLIP model** to **2** and apply

==Euler-A Defaults==
If you want to replicate NovelAI Euler_a results, you must do the following alongside the defaults above:
-Under **Sampler Parameters** in settings, set 'ETA Noise Seed Delta' to **31337**

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
[**Troubleshooting incorrect Asukas**](https://imgur.com/a/DCYJCSX)

!!!info NovelAI resources

- [Artstyle tags](https://zele.st/NovelAI/)
- [NAI Expressions/Hair/Clothing](https://rentry.org/faces-faces-faces) (some nsfw)
- [Prompt converter](https://seesaawiki.jp/nai_ch/d/%a5%d7%a5%ed%a5%f3%a5%d7%a5%c8%ca%d1%b4%b9) (Convert NovelAI prompt Syntax to WebUI)
- [Emoji Prompts](https://rentry.org/xnpkp)

#->`--TI, HYPERNETWORKS, AND LORAS--`<-#
It's possible to fine-tune your Stable Diffusion experience beyond just the model itself by using 'add-ons' of pre-trained data
You can download a wide selection of them all at [**CivitAI**](https://civitai.com/)
There are 3 major ways this data is introduced:
!!! info
**Textual Inversion (TI)**
Small files typically used to introduce new concepts and characters to Stable Diffusion
They are passively loaded into memory on startup and can be activated by using their name in any prompt
Comes in either .pt or .bin file format
**How to use TIs:**

- Move your Textual Inversion files into `stable-diffusion-webui/embeddings`
- Use the name of the file normally without it's extension in your prompt
  eg "1girl, blonde hair, in the style of `arcane`"
  Adjust or decrease strength using ((())) or [[]] around the trigger word

!!! info
**Hypernetworks**
Larger packs of trained data that can be loaded on top of any given model, affects all results regardless of prompt while active
Often used for replicating distinct artstyles & aesthetics
Only _one_ hypernetwork can be active at a time
Comes in .pt file format
**How to use Hypernetworks:**

- Move your Hypernetwork .pt files into `stable-diffusion-webui/models/hypernetworks`
- Press the **🎴** button under 'generate' in the WebUI
- Navigate to hypernetworks and hit "refresh"
- Select the desired Hypernetwork and adjust it's strength in the prompt eg. `<hypernet:asuka:0.82>`
  !!! info
  **LoRAs (Low Rank Adaptation)**
  Advanced networks that can be [easily trained](https://rentry.org/2chAI_LoRA_Dreambooth_guide_english#kohyas-script)
  Comes in .safetensor file format
  **How to use LoRAs:**
- Navigate to the 'Extensions' tab in the WebUI
- Move your .safetensors LoRA files into `stable-diffusion-webui/models/lora`
- Press the **🎴** button under 'generate' in the WebUI
- Navigate to LoRAs and hit "refresh"
- Select the desired LoRA and adjust it's strength in the prompt eg. `<lora:asuka:0.82>`
  #->`--RUNNING ON 4GB (And under!)--`<-#
  ==These parameters are also useful for regular users who want to make larger images or batch sizes!==
  It is possible to drastically reduce VRAM usage with **some modifications:**
- **Step 1:** Edit `webui-user.bat`
- **Step 2:** After ` COMMANDLINE_ARGS=` , enter your desired parameters:
  **Example:** `COMMANDLINE_ARGS=--medvram`

- If you have 4GB-6GB VRAM
  use `--medvram`.
- If you have **2GB** VRAM,
  use `--lowvram`

If you are getting 'Out of memory' errors on either of these, add `--always-batch-cond-uncond` to the other arguments

==**NOTES:**==

- If you get a **green/black screen** instead of generated pictures, you have a card that doesn't support half precision floating point numbers (known problem on 16xx cards):
  You must use `--precision full --no-half` in addition to other flags, and the model will take much more space in VRAM
  If you are using a **.vae** file, you must also add `--no-half-vae`
- Make sure to **disable** hardware acceleration in your browser and close anything which might be occupying VRAM if you are getting out-of-memory errors

#->`--ALTERNATE GUIDE (Conda)--`<-#
==(You can try this method if the traditional install isn't working)==

- **Follow Steps 1-4 on the main guide above**
- Download Miniconda [HERE](https://docs.conda.io/en/latest/miniconda.html). Download Miniconda 3
- Install Miniconda in the default location. Install for **all users**.
  Uncheck "Register Miniconda as the system Python 3.9" unless you want to
- Open Anaconda Prompt (miniconda3)
- In Miniconda, navigate to the `/stable-diffusion-webui` folder wherever you downloaded using "cd" to jump folders.
  (Or just type "cd" followed by a space, and then _drag the folder into_ the Anaconda prompt.)
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

#->`--LINUX INSTALLATION--`<-#
**Step 1:** Install dependencies

- Debian-based:
  `sudo apt install wget git python3 python3-venv`
- Red Hat-based:
  `sudo dnf install wget git python3`
- Arch-based:
  `sudo pacman -S wget git python3`

**Step 2:** To install in `/home/$(whoami)/stable-diffusion-webui/`, run:
`bash <(wget -qO- https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh)`

#->`--LINKS--`<-#

- [Danbooru Tag Groups](https://danbooru.donmai.us/wiki_pages/tag_groups) (NAI/WD)
- [Embedding list](https://rentry.org/embeddings)
- [mbedding Collection (MEGA)](https://mega.nz/folder/7k0R2arB#5_u6PYfdn-ZS7sRdoecD2A)
- [Hypernetwork Training for dummies](https://rentry.org/hypernetwork4dumdums)
- [Textual Inversion guide (colab)](https://rentry.org/textard)
- [SD 1.4 Artist list with pictures](https://rentry.org/artists_sd-v1-4)
- [Top 500 artists comparison](https://www.urania.ai/top-sd-artists)
- [Search the training database](https://haveibeentrained.com/)
- [Inpainting guide](https://rentry.org/inpainting-guide-SD)(nsfw)
- [SD wiki](https://wiki.installgentoo.com/wiki/Stable_Diffusion) (on hiatus)
- [Voldy's mini-wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki)
- [CPU Guide (Openvino)](https://rentry.org/cputard)
- [Inpainting Tips](https://rentry.org/drfar)
- [Anon's guide for anime vectors](https://rentry.org/anime_and_titties) (Waifu Diffusion)
- [Prebuilt Xformers](https://rentry.org/25i6yn)
- [Remacri Upscaler](https://u.pcloud.link/publink/show?code=kZgSLsXZ0M1fT3kFGfRXg2tNtoUgbSI4kcSy)(Landscapes) [Lollypop Upscaler](https://drive.google.com/u/1/uc?id=10h8YXKKOQ61ANnwLjjHqXJdn4SbBuUku&export=download)(Anthropomorphic Figures)
- [Other Upscaler Models](https://upscale.wiki/wiki/Model_Databaseat)
  (Place upscaler models in ESRGAN folder)
- [Prompts from China](https://docs.qq.com/doc/DWHl3am5Zb05QbGVs)
- Build great aesthetic prompts using the [prompt builder](https://promptomania.com/stable-diffusion-prompt-builder/)
- [Japanese Keywords](https://chara-zokusei.jp/question_list)
- Use [Darkreader](https://darkreader.org/) to change your Gradio theme to dark mode
- [Informal Training guide](https://rentry.org/informal-training-guide) (30gb vram+)
- [Debugging guide](https://rentry.org/pf98i)
- [Python for Windows 7](https://github.com/adang1345/PythonWin7)
- [Stable diffusion WebUI repo](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [Waifu Diffusion huggingface page](https://huggingface.co/hakurei/waifu-diffusion)

#->`--TROUBLESHOOTING--`<-#
!!! info
**IF YOUR PROBLEM ISN'T LISTED HERE:**
Try updating your requirements, this can correct many obscure issues across SD -**1:** Open an administrator powershell window in `\stable-diffusion-webui\`
(Windows shortcut: Hold ALT, then press F, S, then A) -**2:** Enter `Set-ExecutionPolicy Unrestricted` and hit Yes -**3:** Enter `.\venv\Scripts\activate` -**4:** `Enter pip install -r requirements.txt`
(Note- it may take 20-30 minutes to finish, be patient) -**5:** After requirements are installed, type `Set-ExecutionPolicy Restricted` for security reasons

---

- Make sure your folder paths do **not have spaces**
- If you get **Git is not recognized as an internal or external command** when launching, your Git is not set to PATH (Common issue on W7) -**1:** Open the start menu and search for "Edit system environment variables", open it -**2:** Click "Environment Variables" -**3:** Find `Path` under **System Variables** and double click it -**4:** Add your Git path: -**W10**: With the "New" button in the PATH editor, add `C:\Program Files\Git\bin\` and `C:\Program Files\Git\cmd\` to the end of the list. -**W7**: At the end of "Variable value", insert a `;` followed by your Git path:
  eg. `;C:\Program Files\Git\bin\;C:\Program Files\Git\cmd\`. Do not put a space between `;` and the entry.
  -Git should now be recognized inside CMD!
- If you get **launch.py error, unrecognized arguments** when trying to use the `--ckpt` flag, try using the full relative path for it in webui-user.bat
  eg. `COMMANDLINE_ARGS= --ckpt ./models/Stable-diffusion/nai.ckpt`
- "I git pulled to update and something broke!"
  Naturally since many new features are introduced, there may be some instability. Follow [**These instructions**](https://rentry.org/git_retard) to revert to a previous build
- If you are getting a **winerror** when installing, or you feel you broke something and want to reinstall from scratch,
  delete these directories: `venv`, `repositories` and try again
- If you are getting **Python not found** as an error, you may need to manually set your PATH in webui-user.bat:
  see "Setting Python PATH" under 'Howto Extras' below for instructions
- (img2img) if you get **RuntimeError: Sizes of tensors must match**, you need to change the resolution of your input image
- Make sure you have the latest [CUDA toolkit](https://developer.nvidia.com/cuda-11.3.0-download-archive?target_os=Windows&target_arch=x86_64) and GPU drivers you can run
- If you get **Torch is not able to use GPU**, you may have to download [Python 3.7](https://www.python.org/downloads/release/python-370/) instead
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
  If you are using a **.vae** file, you must also add `--no-half-vae`
  Unfortunately, the model will take much more space in VRAM-
  So it is recommended to use flags like `--medvram` in combination with it
- If your output is a jumbled rainbow mess your image resolution is set TOO LOW
- Having too high of a CFG level will also introduce color distortion, your CFG should be between 5-15
- On older systems, you may have to change `cudatoolkit=11.3` to `cudatoolkit=9.0`
- Make sure your installation is on the C: drive
- This guide is designed for NVIDIA GPUs _only_, as stable diffusion requires cuda cores.
  AMD users should try [THIS GUIDE](https://rentry.org/ayymd-stable-diffustion-v1_4-guide)

#->`--TIPS--`<-#

- You can quickly switch between your downloaded .ckpt files within the WebUI
- Unlike base SD, NovelAI can generate images natively up to **768x768** without any distortion
- Otherwise, if you are generating images significantly **larger** than 512x512 in SD, make sure to check **Highres, fix** for the best results.
  if you don't, 'cloning' distortion may begin appearing (multiple faces, arms, etc)
  +Lower denoising strength seems to work best (I used 0.5)
- Even with the available fix, it is still recommended to generate in 512x512 for the most accurate results, as the non-NovelAI models were trained on 512x images
- Do **not** use the `--medvram` or `--lowvram` argument when training! Results will be highly inferior
- nai.yaml may **not** be necessary to achieve 1:1 with NovelAI results
- Use ((( ))) around keywords to increase their strength and [[[]]] to decrease their strength
- Unlike other samplers, **k_euler_a** and other ancestral samplers can generate high quality results from low steps.
- **Save prompt as style** allows you to save a prompt as an easily selectable output. A box to select will appear to the left of Roll after you save your first style, allowing you to make a selection. Prompts can be deleted by accessing `styles.csv`
  (This can be helpful if you find a combination that generations really good images and want to repeatedly use it with varied subjects.)
- You can drag your favorite result from the output tab on the right **back into** img2img for further iteration
- The **k_euler_a** and **k_dpm_2_a** samplers give vastly different, more intricate results from the same seed & prompt
  However their results are not consistent throughout steps. Other samplers provide more predictable, linear refinement with more steps
- The seed for each generated result is in the output filename if you want to revisit it
- Using the same keywords as a generated image in img2img produces interesting variants
- It's recommended to have your prompts be at least 512 pixels in _one_ dimension, or a 384x384 square at the absolute smallest
  Anything smaller will have heavy distortion
- CLIP interrogator takes up a lot of space (8gb), you might not want to select it if you don't plan on using it frequently
- Try Low strength (0.3-0.4) + High CFG in img2img for interesting outputs
- You can use Japanese Unicode characters in prompts

#->`--HOWTO EXTRAS--`<-#

->==-----**Running on CPU**-----==<-
It is possible to run the full WebUI on a CPU instead of a GPU, but it is very sluggish
_If you want a faster but very basic CPU experience, try the [Openvino](https://rentry.org/cputard) version_
Otherwise:

- Follow the main Guide
- Modify these 2 lines under **def prepare_environment** like so:
- `torch_command = os.environ.get('TORCH_COMMAND', "pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu")`
- `commandline_args = os.environ.get('COMMANDLINE_ARGS', "--skip-torch-cuda-test --precision full --no-half")`
- Launch webui-user.bat like normal

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

- Use `--listen` to make the server listen to network connections. This will allow devices on your **local network** to access the UI, and if you configure port forwarding, also computers on the internet.
- Use `--share` option to run online. You will get a xxx.app.gradio link. This is the intended way to use the program in collabs.
- Use `--port xxxx` to make the server listen on a specific port, `xxxx` being the wanted port. Remember that all ports below 1024 needs root/admin rights, for this reason it is advised to use a port above 1024. Defaults to port 7860 if available.
- Use `--share --gradio-auth username:password` to add shared authentication
  Optionally, you can provide multiple sets of usernames and passwords separated by commas (user1:pw1, user2:pw2).

->==-----**Setting Python PATH**-----==<-
Sometimes, you may need to manually add your Python directory to PATH:

- Find the location of your Python install
  it should be something along the lines of `C:\Users\you\AppData\Local\Programs\Python`
- Open the folder and **shift+right click** `python.exe`
  then click 'copy as path'
- Edit `webui-user.bat`
  paste the path you copied after **PYTHON=** (keeping quotes), and save

->==-----**Auto-update**-----==<-
**Note:** This only applies to those who used `git clone` to install the repo
You can set your script to automatically update by editing `webui-user.bat`
Add `git pull` one line above `call webui.bat`
Save

->==-----**X/Y Plot**-----==<-
Although most features are relatively self explanatory to use, the X/Y plot script can be particularly obtuse to understand, notably the "S/R" option

- The S/R prompt Searches the whole prompt for the first entry in the the comma separated values field and Replaces all occurrences of the first word with with one entry from the values Prompt S/R field on every iteration.
- The iterations of course also happen for every value of the other type field.
- The keyword will _also_ be iterated, so using something like "red, white, blue" will result in issues when your prompt also features "reddit gayfurs".

->==-----**Setting Different Output Location**-----==<-
-Copy the text [Here](https://api.ipfsbrowser.com/ipfs/get.php?hash=QmYndEhuPYzqc1gYxeqKXvhXEXsa5N2UN6hewjgjSX1qhJ) and save it as `output.bat`, Move it to wherever you want your images to output to.
Run it, and it will create the appropriate sub-folders. You can delete the .bat after this is complete.
-Go to the Settings tab of the UI and assign your new file locations accordingly. Once you’ve assigned the locations, make sure to hit **Apply Settings**
It is also recommended to enable the following setting if you want your outputs to be organized -[x] When writing images/grids, create a directory with name derived from the prompt

->==-----**GFPGAN**-----==<-
GFPGAN is used for correcting realistic faces, it was replaced with CodeFormer face correction which comes with the main install and is generally better.
To install GFPGAN, download and place [**GFPGANv1.3.pth**](https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth) into the main webUI directory

#->`--SAFE UPDATING--`<-#
The AUTOMATIC1111 repo is what we call _bleeding edge_, which means that although new features are added rapidly, it's
not uncommon for new bugs to come along with them.
The good thing is, git pull updates are **reversible** if something ever breaks
Here's how you can update without taking a risk:

- Open a git bash in your main Stable Diffusion folder
- Enter `git rev-parse --short HEAD`to get the hash of your current version. Write it down
  It should be a 7 character string like 'cc58036'
- Update normally by typing `git pull`

If the newest version works fine, great!
If you need to revert, all you have to do is type `git checkout` followed by your previous version hash
eg. `git checkout 7edd58d`

#->`--W7 HELP--`<-#
On Windows 7, you **may** get "**api-ms-win-core-path-l1-1-0.dll is missing**" as an error when trying to follow this guide.
This is because many modern programs and frameworks require a system file only present in newer versions of Windows.
Luckily, it has been backported to be compatible with W7, and can be downloaded [**HERE**](https://github.com/nalexandru/api-ms-win-core-path-HACK/releases/download/0.3.1/api-ms-win-core-path-blender-0.3.1.zip) [(Github page)](https://github.com/nalexandru/api-ms-win-core-path-HACK)
Upzip and copy the **x86** .dll into `C:\Windows\SysWOW64` and the **x64** .dll into `C:\Windows\System32` and reboot, then you should be good to go
If you do not get that error, then you do not need to do this.

==(2/24/23)==
Windows 7 is unable to use CUDA above version 11.4. You'll need to uninstall default version of torch (and xformers if you are planning to use it) and install older version instead:

- Browse to \stable-diffusion-webui\venv\Scripts\
- Launch CMD in this folder by typing in cmd in the windows explorer address bar
- Run the following commands in order and press 'Y' when prompted:
  pip uninstall torch torchvision
  pip uninstall torchaudio
  pip uninstall xformers
  pip install torch\==1.12.1+cu113 torchvision\==0.13.1+cu113 torchaudio\==0.12.1 --extra-index-url https://download.pytorch.org/whl/cu113
  pip install -U -I --no-deps https://github.com/C43H66N12O12S2/stable-diffusion-webui/releases/download/f/xformers-0.0.14.dev0-cp310-cp310-win_amd64.whl

#->`--MISC--`<-#

**--OLD MODEL--**
The original v1.3 leaked model from June can be downloaded here:
https://drinkordiecdn.lol/sd-v1-3-full-ema.ckpt
Backup Download: https://download1980.mediafire.com/3nu6nlhy92ag/wnlyj8vikn2kpzn/sd-v1-3-full-ema.ckpt
Torrent Magnet: https://rentry.co/6gocs

**--OLD GUIDE--**
Voldy guide pre-February 2023 update https://rentry.org/voldybackup
Voldy guide pre-Table of Contents (9/15) https://rentry.org/voldyold
The original hlky guide (replaced as of 9/8/22) is here: https://rentry.org/GUItard
Japanese hlky guide https://news.livedoor.com/article/detail/22794512/
The original guide (replaced as of 8/25/22) is here: https://rentry.org/kretard

->**APPROXIMATE RENDER TIME BY GPU (50 steps)**<-
![Time](https://i.ibb.co/yd7SZ32/chartthin.png)
->**SAMPLER COMPARISON**<-
![Sampler Comparison](https://i.ibb.co/vm4fm7L/1661440027115223.jpg)
