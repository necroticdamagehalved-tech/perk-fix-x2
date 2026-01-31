import { initTabs, initBuildSubTabs, initState, initRaces, writeBuildId, initSpecial } from './core.js?v=phase6_3_0';
initTabs();
initBuildSubTabs();
initState();
initRaces();
initSpecial();
writeBuildId('phase6.3.0_perks');


document.addEventListener('click', (e) => {
  const btn = e.target.closest('.subtab');
  if(!btn) return;
  if(btn.dataset.subtab === 'special') {
    setTimeout(() => initSpecial(), 0);
  }
});