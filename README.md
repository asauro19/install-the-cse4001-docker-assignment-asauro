# install-the-cse4001-docker-assignment

## Assignment (CSE4001): Installing the CSE4001 Docker Container

In this assignment, you will set up the **OS/161** operating system on your personal computer using the provided Docker environment. This setup will be used for all subsequent OS/161-related assignments in the course.

Follow the instructions provided in the link below to install and run OS/161:

- [Installing OS/161](https://github.com/cse4001/UsingCSE4001_OS161)

Once OS/161 is running, you must make a small modification to the kernel, rebuild it, and boot the updated kernel to verify your change.

### Required Kernel Change

1. Search the OS/161 kernel source code for the string:

   ```
   Put-your-group-name-here
   ```

2. Replace this string with **your name**.

3. Rebuild the kernel.

4. Boot OS/161 and confirm that the updated boot sequence displays your name.

------

## Deliverables

- Update this `README.md` file to include **a screenshot** showing OS/161 successfully booting with your name visible in the boot output.
- The screenshot must be:
  - A valid `.jpg` image format, with file named `screenshot.jpg`. 
  - Uploaded to this repository.
  - Properly displayed in this README using Markdown image syntax. Once you commit the changes, reload the repository on GitHub to ensure that the screenshot figure renders properly. 

### Screenshot Guidelines

The goal is to quickly and clearly verify that the assignment tasks were completed. Capture a single screenshot that shows the OS/161 boot output with your name visible.


------

## Screenshots
![Example image](Screenshot.jpeg)



