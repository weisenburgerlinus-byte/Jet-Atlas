document.querySelectorAll('[data-turn]').forEach((control) => {
    const modelSelector = control.dataset.turn;
    const model = modelSelector ? document.querySelector(modelSelector) : null;
    const image = model?.querySelector('img');

    if(!model || !image) return;

    const updateModelRotation =  () => {
        const angle =  Number(control.value);

        if (!Number.isFinite(angle) || !image.complete || image.naturalWidth === 0) return;

        model.style.transform = `rotate(${angle}deg)`;
    };
    control.addEventListener('input', updateModelRotation),
    updateModelRotation();
    image.addEventListener('load', updateModelRotation);
    updateModelRotation();
});