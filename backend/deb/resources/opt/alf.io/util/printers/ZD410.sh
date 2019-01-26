#!/usr/bin/env bash
/usr/sbin/lpadmin -E -p "Alfio-ZBR-$2" -v "usb://Zebra%20Technologies/ZTC%20ZD410-203dpi%20ZPL?serial=$1" -m drv:///sample.drv/zebra.ppd -o printer-error-policy=abort-job -o printer-is-shared=false
su pi -c "/usr/bin/lpoptions -p Alfio-ZBR-$2 -o usb-unidir-default=true -o Darkness=30 -o zePrintRate=4"
/usr/sbin/cupsenable "Alfio-ZBR-$2"
/usr/sbin/cupsaccept "Alfio-ZBR-$2"
/sbin/rmmod usblp