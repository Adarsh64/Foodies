# -*- coding: utf-8 -*-
"""
Created on Fri Nov 22 21:13:19 2019

@author: Guruprasad
"""

import googlemaps
API_key = 'AIzaSyB5_O7Hzjg_DwkRD2br2vgp4QkELw9v_9w'
gmaps = googlemaps.Client(key = API_key)
LatOrigin = "12.935"
LngOrigin = "77.534"
LatDest = "12.944"
LngDest = "77.545"
origin = (LatOrigin, LngOrigin)
dest = (LatDest, LngDest)
result = gmaps.distance_matrix (origin, dest, mode = 'driving')
print (result)