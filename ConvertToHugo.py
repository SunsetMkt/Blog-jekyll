import os
import shutil

POSTS_PATH = "_posts/"
RES_PATH = "assets/postres/"
OUT_PATH = "out/"


def list_dir(path):
    for root, dirs, files in os.walk(path):
        for file in files:
            yield os.path.join(root, file)


def get_filename(path):
    return path.split("/")[-1]


def remove_extension(filename):
    return filename.split(".")[0]


def mkdir(path):
    os.makedirs(path, exist_ok=True)


def fix_md(path):
    with open(path, "r", encoding="utf-8") as f:
        # Get the tags: line
        lines = f.readlines()
        for i in range(len(lines)):
            if lines[i].startswith("tags"):
                tags = lines[i].split(":")[1].strip().split(" ")
                out = "tags:\n"
                for tag in tags:
                    out += f"  - {tag}\n"
                lines[i] = out
        with open(path, "w", encoding="utf-8") as f:
            f.writelines(lines)


def main():
    for path in list_dir(POSTS_PATH):
        filename = remove_extension(get_filename(path))
        title = remove_extension("".join(filename[11:]))
        respath = os.path.join(RES_PATH, filename)
        outpath = os.path.join(OUT_PATH, title)
        mkdir(outpath)
        # Check if respath is a dir
        if os.path.isdir(respath):
            # Copy respath to out
            shutil.copytree(respath, outpath, dirs_exist_ok=True)
        fix_md(path)
        if path.endswith(".html"):
            shutil.copyfile(path, os.path.join(outpath, "index.html"))
        else:
            shutil.copyfile(path, os.path.join(outpath, "index.md"))


if __name__ == "__main__":
    main()
