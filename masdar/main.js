//+ il3ab hifz adaaf inqata3 intahaa
;(function(){
	'use strict';

	var aqdaamlist, mowjoodah, la3ib, timeout, mfateeh,
	addzero = function (n) {
		n = Math.floor(n);
		return n > 9 ? n : '0'+n;
	},
	toms = function (w) {
		return addzero(w / 60) +' : '+ addzero((w / 60) % 1 * 60);
	},
	redoarray = function () { // TODO fix $.array bug
		var aqdaam = $.array();
		var m = mfateeh.list.querySelectorAll('.XPO.listitem');
		m.forEach(function (item) {
			var o = aqdaamlist.adapter.get( getdata(item, 'XPO.uid') );
			if (o)
				aqdaam.set(o.uid, o);
		});
		aqdaamlist.adapter = aqdaam;
	},
	jaddad = function () {
		if (mowjoodah) {
			izhar(mfateeh.ism);
			izhar(mfateeh.muddah);
			innertext(mfateeh.ism, mowjoodah.ism);
			innertext(mfateeh.muddah, mowjoodah.muddah);
		} else {
			ixtaf(mfateeh.ism);
			ixtaf(mfateeh.muddah);
		}
		var kul = 0;
		aqdaamlist.adapter.each(function (o) {
			if (mowjoodah) {
				if (o.uid == mowjoodah.uid) {
					kul += mowjoodah.muddah;
				} else
				if (o.uid > mowjoodah.uid)
					kul += o.muddah;
			} else kul += o.muddah;
		});
		innertext(mfateeh.kul, toms(kul));
	},
	qaadim = function () {
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			if (!la3ib) return;
			var mdh = mowjoodah.muddah;
			if (mdh > 1) {
				if (mdh <= 4) {
//					sawtkaatib.hajm = Math.max(.05, (4-mdh)/4);
					beepb.play();
//					sawtkaatib.hajm = 1;
//					sawtkaatib.minhuroof('ф', 3);
				} else {
//					sawtkaatib.hajm = .1;
//					sawtkaatib.minhuroof('-', 1);
				}
				--mowjoodah.muddah;
				qaadim();
			} else {
				if (aqdaamlist.selected === aqdaamlist.length()-1) {
//					sawtkaatib.minhuroof('aффa aффa aффa', 3);
					main.intahaa();
				} else {
					beepa.play();
//					sawtkaatib.minhuroof('  mmmm t', 3);
					aqdaamlist.down();
					main.il3ab();
				}
			}
			jaddad();
		}, 1000);
	},
	sendbtn = function (sinf) {
		var icon = sinf ? 'XPO.iconpause' : 'XPO.iconplayarrow';
		softkeys.set(K.en, function () {
			if (sinf) main.inqata3();
			else main.il3ab();
		}, 0, icon);
	},
	auxbtn = function (sinf) {
		var icon = sinf ? 'XPO.iconstop' : 'XPO.iconedit';
		softkeys.set(K.sl, function () {
			if (sinf) {
				main.intahaa();
			} else {
				aqdaamlist.press(K.sl);
			}
		}, 0, icon);
	},
	terbtn = function (sinf) {
		var icon = 'XPO.iconadd';
		softkeys.set('3', function () {
			setTimeout(function () {
				main.adaaf();
			});
		}, '3', icon);
	},
	havafbtn = function (sinf) {
		var icon = 'XPO.iconclose';
		softkeys.set('0', function () { Hooks.run('XPO.dialog', {
			c: function (k) {
				aqdaamlist.press('0');
			},
			m: 'delete?'
		}); }, '0', icon);
	},

	main = {
		il3ab: function () {
			mowjoodah = aqdaamlist.axavmuntaxab();
			if (mowjoodah) {
				mowjoodah = shallowcopy(mowjoodah);
				la3ib = 1;
				webapp.sahhar();
				qaadim();
				jaddad();
				sendbtn(1);
				auxbtn(1);
			}
		},
		inqata3: function () {
			la3ib = 0;
			webapp.nawwam();
			clearTimeout(timeout);
			sendbtn();
			jaddad();
		},
		intahaa: function () {
			if (mowjoodah) {
				webapp.nawwam();
				main.inqata3();
				auxbtn();
				mowjoodah = 0;
				jaddad();
			}
		},
		hifz: function () { $.taxeer('XPO.hifz', function () {
			var aqdaam = [];
			var m = mfateeh.list.querySelectorAll('.XPO.listitem');
			m.forEach(function (item) {
				var o = aqdaamlist.adapter.get( getdata(item, 'XPO.uid') );
				if (o) aqdaam.push([o.ism, o.muddah]);
			});
			jaddad();
			preferences.set('aqdaam', JSON.stringify(aqdaam));
		}, 2000); },
		adaaf: function (item) { Hooks.run('XPO.dialog', {
			x: 64,
			c: function (k) {
				item = item || {};
				var o = {
					uid:	item.uid || (aqdaamlist.length()+1),
					ism:	k,
					muddah:	item.muddah || 0,
				};
				aqdaamlist.set( o );
				aqdaamlist.select( aqdaamlist.id2num(o.uid) );
				main.hifz();
			},
			m: 'XPO.ism',
			a: (item||{}).ism,
			q: 'XPO.ism'
		}); },
	};

	Hooks.set('XPO.ready', function () {
		mfateeh = view.mfateeh('XPO.main');
//		webapp.statusbarpadding();
		webapp.header();
//		sawtkaatib.hajm = .5;

		aqdaamlist = list( mfateeh.list ).idprefix('XPO.qadam')
						.listitem('XPO.qadam');
		
		aqdaamlist.onpress = function (item, key) {
			if (key == '4' && item.muddah > 0) {
				--item.muddah;
				aqdaamlist.set(item);
				aqdaamlist.select();
				main.hifz();
			}
			if (key == '6' && item.muddah < 99999) {
				++item.muddah;
				aqdaamlist.set(item);
				aqdaamlist.select();
				main.hifz();
			}
			if (key == '2') {
				aqdaamlist.moveup( item.uid );
				redoarray();
				main.hifz();
			}
			if (key == '8') {
				aqdaamlist.movedown( item.uid );
				redoarray();
				main.hifz();
			}
			if (key == '0') {
				aqdaamlist.pop(item.uid);
				main.hifz();
			}
			if (key == K.en) {
				if (la3ib) main.inqata3();
				else main.il3ab();
			}
			if (key == K.sl) {
				main.adaaf(item);
			}
		};
		aqdaamlist.uponpaststart = function () {
			aqdaamlist.first();
			return 1
		};
		aqdaamlist.uponpastend = function () {
			aqdaamlist.last();
			return 1;
		};
		var aqdaam = preferences.get('aqdaam', 1) || [];
		aqdaam.forEach(function (item, i) {
			aqdaamlist.set({
				uid: i+1,
				ism: item[0],
				muddah: item[1],
			});
		});
	});
	Hooks.set('XPO.viewready', function (args) {
		if (args.XPO.name == 'XPO.main') {
			softkeys.list.basic(aqdaamlist);
			aqdaamlist.select(0);
			jaddad();
			auxbtn();
			sendbtn();
			terbtn();
			havafbtn();
			softkeys.set('2', function () {
				aqdaamlist.press('2');
			}, '2', 'XPO.iconkeyboardarrowup');
			softkeys.set('8', function () {
				aqdaamlist.press('8');
			}, '8', 'XPO.iconkeyboardarrowdown');
			softkeys.set('4', function () {
				aqdaamlist.press('4');
			}, '4', 'XPO.iconexposureneg1');
			softkeys.set('6', function () {
				aqdaamlist.press('6');
			}, '6', 'XPO.iconexposureplus1');
		}
	});
	Hooks.set('XPO.restore', function (darajah) {
		if (darajah === 0 && backstack.states.main) {
		}
	});

})();
