Open Source Browser Add-on.
Provides the answers from an uploaded Source.
- version 1.00, using pre loaded Source

Steps before Use:
  1) Clone the repo into a chosen directory // Alternatively one can download the .zip from the <CODE>Code</CODE>menu
  2) Load the Temporary Add-on
  3) Load a <CODE>Source</CODE> for the Archive

Loading the Temporary Add-on:
  - Click the extensions > Manage Extensions > click on Settings > Debug Add-ons > Load Temporary Add-on > navigate to the cloned directory and select the <CODE>manifest.json</CODE>

  - note: After completely closing the browser the user has to reload the Add-on. However, the repo only needs to be cloned once

Usage:
  - When nothing is selected you have the menu item <CODE>"loader"</CODE>, this allows the user to upload a Source for the Archive with the desired contents.
  - The Source file has to be a <CODE>.txt file</CODE>, the directory of the Source can be anything.
  - After the Source is loaded, when the user selects a text, a new menu item <CODE>"Help"</CODE> will appear, pressing that will scan the Archive and provide the answer through a browser notification.
