var CMDLookupTable = {
  'rate': {
    'title': 'rate',
    'description': '<p>Is the <em>maximum</em> bytes per second that the host can receive data.</p><p><strong>Min</strong>: 500, <strong>Max</strong>: 128000<br /><strong>Default</strong>: 80000 <!--<i class="icon-arrows-cw" data-default="80000"></i>--></p>'
  },
  'cl_cmdrate': {
    'title': 'cl_cmdrate',
    'description': '<p>Is the <em>maximum</em> number of command packets sent to the server per second.</p><p><strong>Min</strong>: 10, <strong>Max</strong>: 128<br /><strong>Default</strong>: 64 <!--<i class="icon-arrows-cw" data-default="64"></i>--></p>'
  },
  'cl_updaterate': {
    'title': 'cl_updaterate',
    'description': '<p>Is the number of packets per second of updates you are requesting from the server.</p><p><strong>Default</strong>: 64</p>'
  },
  'cl_interp': {
    'title': 'cl_interp',
    'description': '<p>Sets the interpolation amount (bounded on the low side by server interp ratio settings).</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 0.50<br /><strong>Default</strong>: 0.03</p>'
  },
  'cl_interp_ratio': {
    'title': 'cl_interp_ratio',
    'description': '<p>Sets the interpolation amount.</p><p>Final amount is (cl_interp_ratio / cl_updaterate)</p><p><strong>Default</strong>: 2.0</p>'
  },
  'cl_lagcompensation': {
    'title': 'cl_lagcompensation',
    'description': '<p>Performs server side lag compensation of weapon firing events.</p><p><strong>Default</strong>: (1) On <!--<i class="icon-arrows-cw" data-default="on"></i>--></p>'
  },
  'volume': {
    'title': 'volume',
    'description': '<p>Sets the volume of sounds in game.</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 1<br /><strong>Default</strong>: 1 <!--<i class="icon-arrows-cw" data-default="1"></i>--></p>'
  },
  'snd_musicvolume': {
    'title': 'snd_musicvolume',
    'description': '<p>Sets the volume of music in game.</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 1<br /><strong>Default</strong>: 0.7 <!--<i class="icon-arrows-cw" data-default="0.7"></i>--></p>'
  },
  'windows_speaker_config': {
    'title': 'windows_speaker_config',
    'description': '<p>Sets the configuration of sound channels.</p><p><strong>Default</strong>: -1</p>'
  },
  'snd_mixahead': {
    'title': 'snd_mixahead',
    'description': '<p>Sets the buffer time to play audio.</p><p><strong>Min</strong>: 0<br /><strong>Default</strong>: 0.1</p>'
  },
  'snd_headphone_pan_exponent': {
    'title': 'snd_headphone_pan_exponent',
    'description': '<p>Specifies the exponent for the pan crossfade from phone to phone if the exp pan law is being used.</p><p><strong>Default</strong>: 2</p>'
  },
  'snd_headphone_pan_radial_weight': {
    'title': 'snd_headphone_pan_radial_weight',
    'description': '<p><pre>Apply cos(angle) * weight</pre> before pan law.</p><p><strong>Default</strong>: 1</p>'
  },
  'snd_legacy_surround': {
    'title': 'snd_legacy_surround',
    'description': '<p>Sometimes helps correct 3D surround issues, enable this only if you are experiencing problems with 3D sound.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'snd_mute_losefocus': {
    'title': 'snd_mute_losefocus',
    'description': '<p>Disables sound when the game loses focus.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'voice_scale': {
    'title': 'voice_scale',
    'description': '<p>Sets the volume of voice chat.</p><p><strong>Default</strong>: 1</p>'
  },
  'voice_enable': {
    'title': 'voice_enable',
    'description': '<p>Enables voice communcation.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'lobby_voice_chat_enabled': {
    'title': 'lobby_voice_chat_enabled',
    'description': '<p>Enables your microphone in the game lobby.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'mat_monitorgamma': {
    'title': 'mat_monitorgamma',
    'description': '<p>Sets the gamma of your monitor (typically 2.2 for CRT and 1.7 for LCD).</p><p><strong>Min</strong>: 1.6, <strong>Max</strong>: 2.6<br /><strong>Default</strong>: 2.2</p>'
  },
  'mat_queue_mode': {
    'title': 'mat_queue_mode',
    'description': '<p>Is the queue/thread mode the matrial system should use.</p><ul><li>-1: Default</li><li>0: Synchronus single thread</li><li>1: Queued single thread</li><li>2: Queued multithreaded</li></ul><p><strong>Default</strong>: -1</p>'
  },
  'fps_max': {
    'title': 'fps_max',
    'description': '<p>Caps your fps at the specified rate in game.</p><p><strong>Default</strong>: 300</p>'
  },
  'fps_max_menu': {
    'title': 'fps_max_menu',
    'description': '<p>Caps your fps at the specified rate in menus.</p><p><strong>Default</strong>: 120</p>'
  },
  'mat_vsync': {  /* part of video.cfg can't be changed by commands */
    'title': 'mat_vsync',
    'description': '<p>Syncs your framerate with your monitors refresh rate.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'r_dynamic': {
    'title': 'r_dynamic',
    'description': '<p>Enables dynamic shadows.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'r_drawtracers_firstperson': {
    'title': 'r_drawtracers_firstperson',
    'description': '<p>Toggles the visiblity of first person weapon tracers.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'sensitivity': {
    'title': 'sensitivity',
    'description': '<p>Sets the mouse sensitivity.</p><p><strong>Min</strong>: 0.0001, <strong>Max</strong>: 10000000<br /><strong>Default</strong>: 6.0</p>'
  },
  'zoom_sensitivity_ratio_mouse': {
    'title': 'zoom_sensitivity_ratio_mouse',
    'description': '<p>Is the additional mouse sensitivity scale factor applied when FOV is zoomed in.</p><p><strong>Default</strong>: 1.0</p>'
  },
  'm_customaccel': {
    'title': 'm_customaccel',
    'description': '<p>Sets custom mouse acceleration:</p><ul><li>0: Custom acceleration disabled</li><li>1: <pre>mouse_acceleration = min(m_customaccel_max, pow(raw_mouse_delta, m_customaccel_exponent) * m_customaccel_scale + sensitivity)</pre></li><li>2: Same as 1, but x and y sensitivity are scaled by m_pitch and m_yaw respectively</li><li>3: <pre>mouse_acceleration = pow(raw_mouse_delta, m_customaccel_exponent - 1) * sensitivity</pre></li></ul><p><strong>Default</strong>: 3</p>'
  },
  'm_rawinput': {
    'title': 'm_rawinput',
    'description': '<p>Uses raw input for mouse input.</p><p><strong>Default</strong>: 1 (On)</p>'
  },
  'con_filter_enable': {
    'title': 'con_filter_enable',
    'description': '<p>Filters console output based on the setting of con_filter_text.</p><ul><li>1: Filters completely</li><li>2: Displays filtered text brighter than other text.</li></ul><p><strong>Default</strong>: 0</p>'
  },
  'con_filter_text': {
    'title': 'con_filter_text',
    'description': '<p>Is the text with which to filter console output. Set con_filter_enable 1 or 2 to activate.</p><p><strong>Example</strong>: <pre>damage</pre></p>'
  },
  'con_filter_text_out': {
    'title': 'con_filter_text_out',
    'description': '<p>Is the text with which to filter OUT of console output. Set con_filter_enable 1 or 2 to activate.</p><p><strong>Example</strong>: <pre>player:</pre></p>'
  },
  'mm_dedicated_search_maxping': {
    'title': 'mm_dedicated_search_maxping',
    'description': '<p>Sets the maximum allowable ping to dedicated servers when searching for games.</p><p><strong>Min</strong>: 50, <strong>Max</strong>: 350<br /><strong>Default</strong>: 150</p>'
  },
  'ui_steam_overlay_notification_position': {
    'title': 'ui_steam_overlay_notification_position',
    'description': '<p>Sets the position of steam overly notifications.</p><p><strong>Default</strong>: topleft</p>'
  },
  'cl_downloadfilter': {
    'title': 'cl_downloadfilter',
    'description': '<p>Determines which files can be downloaded from the server.</p><ul><li>All</li><li>None</li><li>Nosounds</li></ul><p><strong>Default</strong>: all</p>'
  },
  'developer': {
    'title': 'developer',
    'description': '<p>Sets developer message level.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'con_enable': {
    'title': 'con_enable',
    'description': '<p>Allows the console to be activated.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'player_nevershow_communityservermessage': {
    'title': 'player_nevershow_communityservermessage',
    'description': '<p>Enable or disable community server message.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'gameinstructor_enable': {
    'title': 'gameinstructor_enable',
    'description': '<p>Displays in game lessons that teach new players.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'option_duck_method': {
    'title': 'option_duck_method',
    'description': '<p>Switches between hold to duck and toggle duck on/off.</p><ul><li>On: Toggle duck on/off</li><li>Off: Hold to duck</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'option_speed_method': {
    'title': 'option_speed_method',
    'description': '<p>Switches between hold to walk and toggle walk on/off.</p><ul><li>On: Toggle walk on/off</li><li>Off: Hold to walk</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_forcepreload': {
    'title': 'cl_forcepreload',
    'description': '<p>Whether or not to force preloading.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_disablehtmlmotd': {
    'title': 'cl_disablehtmlmotd',
    'description': '<p>Disables the HTML MOTD message when connecting to servers.</p><p><strong>Default</strong>: 0 (Off)</p>'
  },
  'cl_autohelp': {
    'title': 'cl_autohelp',
    'description': '<p><strong>Default</strong>: (1) On</p>'
  },
  'cl_showhelp': {
    'title': 'cl_showhelp',
    'description': '<p>Set to 0 to not show on-screen help.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_disablefreezecam': {
    'title': 'cl_disablefreezecam',
    'description': '<p>Disables freezecam after death.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_teammate_colors_show': {
    'title': 'cl_teammate_colors_show',
    'description': '<p>In competitive:</p><ul><li>1: Show teammates as seperate colors in the radar, scoreboard, etc...</li><li>2: Show colors and letters</li></ul><p><strong>Default</strong>: 1</p>'
  },
  'cl_loadout_colorweaponnames': {
    'title': 'cl_loadout_colorweaponnames',
    'description': '<p>If set to true, the weapon names are colored in the weapon loadout to match their rarity.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_autowepswitch': {
    'title': 'cl_autowepswitch',
    'description': '<p>Automatically switch to picked up weapons (if more powerful).</p><p><strong>Default</strong>: (1) On</strong>'
  },
  'cl_use_opens_buy_menu': {
    'title': 'cl_use_opens_buy_menu',
    'description': '<p>Pressing the +use key will open the buy menu if in a buy zone.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'closeonbuy': {
    'title': 'closeonbuy',
    'description': '<p>Closes the buy menu after buying something.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'hud_takesshots': {  /* doesn't work in csgo */
    'title': 'hud_takesshots',
    'description': '<p>Auto-save a scoreboard screenshot at the end of a map.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'hud_scaling': {
    'title': 'hud_scaling',
    'description': '<p>Scales the hud elements.</p><p><strong>Min</strong>: 0.5, <strong>Max</strong>: 0.95<br /><strong>Default</strong>: 0.85</p>'
  },
  'cl_hud_background_alpha': {
    'title': 'cl_hud_background_alpha',
    'description': '<p>Sets the alpha of the background on HUD elements.</p><p><strong>Min</strong>: 0,<strong>Max</strong>: 1<br /><strong>Default</strong>: 0.5</p>'
  },
  'cl_hud_color': {
    'title': 'cl_hud_color',
    'description': '<p>Sets the color of HUD elements.</p><p><strong>Default</strong>: 0</p>'
  },
  'cl_hud_healthammo_style': {
    'title': 'cl_hud_healthammo_style',
    'description': '<p>Hides some HUD elements like health/armor bars and firerate in ammo.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_hud_playercount_showcount': {
    'title': 'cl_hud_playercount_showcount',
    'description': '<p>Determines how to display players on the HUD.</p><ul><li>On: Show count of living players on team (no avatars)</li><li>Off: Show player avatars</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_hud_playercount_pos': {
    'title': 'cl_hud_playercount_pos',
    'description': '<p>Displays the player count HUD element on the bottom of the screen.</p><ul><li>On: Position at bottom</li><li>Off: Position at top</li></ul><p><strong>Default</strong>: (0) Off</p>'
  },
  'viewmodel_fov': {
    'title': 'viewmodel_fov',
    'description': '<p><strong>Default</strong>: 54</p>'
  },
  'viewmodel_offset_x': {
    'title': 'viewmodel_offset_x',
    'description': '<p><strong>Default</strong>: 0</p>'
  },
  'viewmodel_offset_y': {
    'title': 'viewmodel_offset_y',
    'description': '<p><strong>Default</strong>: 0</p>'
  },
  'viewmodel_offset_z': {
    'title': 'viewmodel_offset_z',
    'description': '<p><strong>Default</strong>: 0</p>'
  },
  'viewmodel_presetpos': {
    'title': 'viewmodel_presetpos',
    'description': '<p>Selects a pre-configured viewmodel.</p><p><strong>Default</strong>: (1) Desktop</p>'
  },
  'cl_viewmodel_shift_left_amt': {
    'title': 'cl_viewmodel_shift_left_amt',
    'description': '<p>Is the amount the viewmodel shifts to the left when shooting accuracy increases.</p><p><strong>Min</strong>: 0.5, <strong>Max</strong>: 2<br /><strong>Default</strong>: 1.5</p>'
  },
  'cl_viewmodel_shift_right_amt': {
    'title': 'cl_viewmodel_shift_right_amt',
    'description': '<p>Is the amount the viewmodel shifts to the right when shooting accuracy decreases.</p><p><strong>Min</strong>: 0.25, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.75</p>'
  },
  'cl_bobcycle': {
    'title': 'cl_bobcycle',
    'description': '<p>Is the frequency at which the viewmodel bobs.</p><p><strong>Min</strong>: 0.1, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.98</p>'
  },
  'cl_bob_lower_amt': {
    'title': 'cl_bob_lower_amt',
    'description': '<p>Is the amount the viewmodel lowers when running.</p><p><strong>Min</strong>: 5, <strong>Max</strong>: 30<br /><strong>Default</strong>: 21</p>'
  },
  'cl_bobamt_lat': {
    'title': 'cl_bobamt_lat',
    'description': '<p>Is the amount the viewmodel moves side to side when running.</p><p><strong>Min</strong>: 0.1, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.4</p>'
  },
  'cl_bobamt_vert': {
    'title': 'cl_bobamt_vert',
    'description': '<p>Is the amount the viewmodel moves up and down when running.</p><p><strong>Min</strong>: 0.1, <strong>Max</strong>: 2<br /><strong>Default</strong>: 0.4</p>'
  },
  'hud_showtargetid': {
    'title': 'hud_showtargetid',
    'description': '<p>Enables the display of target names.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_draw_only_deathnotices': {
    'title': 'cl_draw_only_deathnotices',
    'description': '<p>Draws only the crosshair and death notices. (Useful for movie making).</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_righthand': {
    'title': 'cl_righthand',
    'description': '<p>Enables right-handed viewmodels.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_showloadout': {
    'title': 'cl_showloadout',
    'description': '<p>Determines whether the loadout is always visible or automatically hides after a short period.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_showpos': {
    'title': 'cl_showpos',
    'description': '<p>Draws the current position at the top of the screen.</p><p><strong>Default</strong>: (0) Off</p>'
  },
  'cl_showfps': {
    'title': 'cl_showfps',
    'description': '<p>Draws an fps meter.</p><ul><li>0: Disabled</li><li>1: FPS</li><li>2: Smooth</li><li>3: Server</li><li>4: Show &amp; Log to file</li><li>5: Thread and wait times</li></ul><p><strong>Default</strong>: (0) Disabled</p>'
  },
  'net_graph': {
    'title': 'net_graph',
    'description': '<p>Draws the network usage data.</p><ul><li>0: Disabled</li><li>1: Show network data</li><li>2: Show in/out data</li><li>3: Draw data on payload</li></ul><p><strong>Default</strong>: (0) Disabled</p>'
  },
  'net_graphproportionalfont': {
    'title': 'net_graphproportionalfont',
    'description': '<p>Determines whether or not netgraph font is proportional.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_hud_radar_scale': {
    'title': 'cl_hud_radar_scale',
    'description': '<p>Sets the scale of the radar HUD element.</p><p><strong>Min</strong>: 0.8, <strong>Max</strong>: 1.3<br /><strong>Default</strong>: 1</p>'
  },
  'cl_radar_scale': {
    'title': 'cl_radar_scale',
    'description': '<p>Sets the scale of the radar interior display.</p><p><strong>Min</strong>: 0.25, <strong>Max</strong>: 1<br /><strong>Default</strong>: 0.7</p>'
  },
  'cl_radar_icon_scale_min': {
    'title': 'cl_radar_icon_scale_min',
    'description': '<p>Sets the minimum icon scale.</p><p><strong>Min</strong>: 0.4, <strong>Max</strong>: 1<br /><strong>Default</strong>: 0.6</p>'
  },
  'cl_radar_always_centered': {
    'title': 'cl_radar_always_centered',
    'description': '<p>If set to 0, the radar is maximally used. Otherwise the player is always centered, even at map extents.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_radar_rotate': {
    'title': 'cl_radar_rotate',
    'description': '<p>Rotates the radar in the direction the player is facing.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_crosshaircolor_r': {
    'title': 'cl_crosshaircolor_r',
    'description': '<p>Sets the amount of red in the crosshair color.</p><p><strong>Default</strong>: 50</p>'
  },
  'cl_crosshaircolor_g': {
    'title': 'cl_crosshaircolor_g',
    'description': '<p>Sets the amount of green in the crosshair color.</p><p><strong>Default</strong>: 250</p>'
  },
  'cl_crosshaircolor_b': {
    'title': 'cl_crosshaircolor_b',
    'description': '<p>Sets the amount of blue in the crosshair color.</p><p><strong>Default</strong>: 50</p>'
  },
  'cl_crosshairalpha': {
    'title': 'cl_crosshairalpha',
    'description': '<p>Sets the transparency of the crosshair.</p><p><strong>Default</strong>: 200</p>'
  },
  'cl_crosshair_drawoutline': {
    'title': 'cl_crosshair_drawoutline',
    'description': '<p>Draws a black outline around the crosshair for better visibility.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_crosshair_outlinethickness': {
    'title': 'cl_crosshair_outlinethickness',
    'description': '<p>Sets the thickness of the crosshair outline</p><p><strong>Min</strong>: 0, <strong>Max</strong>: 3<br /><strong>Default</strong>: 1</p>'
  },
  'cl_crosshairsize': {
    'title': 'cl_crosshairsize',
    'description': '<p>Sets the length of the crosshairs.</p><p><strong>Default</strong>: 5</p>'
  },
  'cl_crosshairthickness': {
    'title': 'cl_crosshairthickness',
    'description': '<p>Sets the width of the crosshairs.</p><p><strong>Default</strong>: 0.5</p>'
  },
  'cl_crosshairgap': {
    'title': 'cl_crosshairgap',
    'description': '<p>Sets the amount of space between the crosshairs.</p><p><strong>Default</strong>: 1</p>'
  },
  'cl_crosshairdot': {
    'title': 'cl_crosshairdot',
    'description': '<p>Determines whether or not to draw a dot in the center of the crosshair.</p><p><strong>Default</strong>: (1) On</p>'
  },
  'cl_crosshairstyle': {
    'title': 'cl_crosshairstyle',
    'description': '<p>Sets the animation behavior of the crosshair.<ul><li>Default: Default apperance and animation behavior.</li><li>Default Static: Default appearance with no animation.</li><li>Accurate Split: Accurate recoil/spread feedback with a fixed inner part.</li><li>Accurate Dynamic: Custom appearance with accurate recoil/spread feedback.</li><li>Classic Static: Custom apperance with no animation.</li><li>CS 1.6 Style: Custom apperance with fake recoil (inaccurate feedback).</li></ul></p><p><strong>Min</strong>: 0, <strong>Max</strong>: 5<br /><strong>Default</strong>: (0) Default</p>'
  },

};


