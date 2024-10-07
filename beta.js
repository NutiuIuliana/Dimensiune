    function updateOrientation(evt) {
            const alpha = evt.alpha || 0;
            const beta = evt.beta || 0;
            const gamma = evt.gamma || 0;

            document.getElementById("a").textContent = `Alpha = ${alpha.toFixed(2)}`;
            document.getElementById("b").textContent = `Beta = ${beta.toFixed(2)}`;
            document.getElementById("c").textContent = `Gamma = ${gamma.toFixed(2)}`;

            const canvas = document.getElementById("canvas");
            const context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);

            const rectWidth = Math.abs(beta);
            context.fillStyle = "#6A0888";
            context.fillRect(180, 150, rectWidth, 50);
        }

        async function init() {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                const response = await DeviceOrientationEvent.requestPermission();
                if (response !== 'granted') {
                    document.getElementById("status").textContent = "Permisiune refuzată.";
                    return;
                }
            }
            window.addEventListener("deviceorientation", updateOrientation);
            document.getElementById("status").textContent = ""; // Clear status message
        }

        init();