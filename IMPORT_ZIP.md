How to add `spark-sanctuary.zip` into this project

This project intentionally does not modify any source code files.

If you want to add the zip file `spark-sanctuary.zip` from your Downloads folder into the project root, there are two options:

1) Run the included helper script `import-zip.bat` (recommended on Windows)

 - Double-click `import-zip.bat` in the project root, or run it from cmd in this folder.
 - The script will look for `%USERPROFILE%\Downloads\spark-sanctuary.zip` and copy it to the project root.
 - You can also pass a full path to the zip file as the first argument:
   `import-zip.bat "C:\path\to\spark-sanctuary.zip"`

2) Copy manually from command line

Open cmd.exe and run (replace paths if different):

```cmd
copy "C:\Users\MFSL0\Downloads\spark-sanctuary.zip" "C:\Users\MFSL0\Downloads\swoosh-home (1)\"
```

Once the zip is placed in the project root it will not alter any source files.

To unpack into `client/pages/our-product/spark` without overwriting existing files, run the provided unpack script:

1) Double-click `unpack-zip.bat` in the project root (it will use `spark-sanctuary.zip` from the project root), or run from cmd:

```cmd
unpack-zip.bat
```

2) Or provide the full path to the ZIP file (if not copied to project root):

```cmd
unpack-zip.bat "C:\Users\MFSL0\Downloads\spark-sanctuary.zip"
```

The script extracts files into `client/pages/our-product/spark` and will skip files that already exist there (so it won't overwrite your project files). If you want a different destination, tell me which folder and I will adjust the script or extract for you.
