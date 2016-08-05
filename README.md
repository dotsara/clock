:star2: one of my [100 projects](https://github.com/dotsara/100-projects) :star2:

# clock!

This is a CODER project: https://googlecreativelab.github.io/coder-projects/projects/digital_clock/

*Changes I made for my version:*
* no jQuery (for fun!)
* I took the main `displayTime` function out of the `$(document).ready` section mostly because even though there's nothing else happening on this little sit, if there _were_ I wouldn't want it all chilling in `$(document).ready`, so why establish the habit.
* I made a reusable function out of the function for adding a leading `0` to the seconds read-out. It's only on minutes and seconds, but why not abstract it a little (:
* 

## notes & resources

I decided to use the non-jQuery `$(document).ready` because it's the _only_ jQuery thing I was using, so why load up all of jQuery for that.

I did the thing again where desktop, mobile landscape (ha!), and mobile portrait are different color schemes. Because it's fun, that's why! 

For colors I used [Paletton](http://paletton.com/) and [Spectral](http://jxnblk.com/Spectral/).