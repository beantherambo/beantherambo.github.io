---
title: spotify-player
date: 2019-08-06 11:30:05
---

<div class="music-ui">

<div class="marquee">--</div>
  <div class="control-wrap">
      <div class="controls">
        <a href="javascript:void(0)" class="btn-play">Play / PAUSE</a> |  
        <a href="javascript:void(0)" class="btn-prev">Prev</a> |
        <a href="javascript:void(0)" class="btn-next">Next</a>
      </div>
      <div class="volume-wrap">
        <input id="musicVolume" value="0.5" type="range" min="0" max="1" step="0.1" />
      </div>
 </div>

<div class="progress" id="progressWrap">
          <div class="progress-bar progress-bar-striped active" id="progressbar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
              <span id="timerWrap">9001</span>
          </div>
      </div>
</div>