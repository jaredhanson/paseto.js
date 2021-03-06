const assert = require('assert');

const Paseto = require('../lib/paseto');

describe('Protocol V2 Test Vectors', () => {

  const V2  = new Paseto.V2();

  describe('#2E - authenticated encryption', () => {

    // NOTE: Throughout these tests we use the undocumented __encrypt API, allowing us to
    //       provide custom nonce parameters, needed for aligning with known test vectors.

    let sk, nk, fk, nonce;

    before(() => {
      const SymmetricKeyV2 = Paseto.SymmetricKey.V2;

      const skey = Buffer.from('707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f', 'hex');
      sk = new SymmetricKeyV2(skey);

      const nkey = Buffer.alloc(32).fill(0);
      nk = new SymmetricKeyV2(nkey);

      const fkey = Buffer.alloc(32).fill(255, 0, 32);
      fk = new SymmetricKeyV2(fkey);
    });

    describe('#1', () => {

      before(() => {
        nonce = Buffer.alloc(24).fill(0);
      });

      it('#1 - Test Vector 2E-1-1 - callback api', (done) => {
        V2.__encrypt('', nk, '', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNUtKpdy5KXjKfpSKrOlqQvQ');
          done();
        });
      });

      it('#1 - Test Vector 2E-1-1 - promise api', (done) => {
        V2.__encrypt('', nk, '', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNUtKpdy5KXjKfpSKrOlqQvQ');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#2 - Test Vector 2E-1-2 - callback api', (done) => {
        V2.__encrypt('', fk, '', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNSOvpveyCsjPYfe9mtiJDVg');
          done();
        });
      });

      it('#2 - Test Vector 2E-1-2 - promise api', (done) => {
        V2.__encrypt('', fk, '', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNSOvpveyCsjPYfe9mtiJDVg');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#3 - Test Vector 2E-1-3 - callback api', (done) => {
        V2.__encrypt('', sk, '', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNkIWACdHuLiJiW16f2GuGYA');
          done();
        });
      });

      it('#3 - Test Vector 2E-1-3 - promise api', (done) => {
        V2.__encrypt('', sk, '', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNkIWACdHuLiJiW16f2GuGYA');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });
    });

    describe('#2', () => {

      before(() => {
        nonce = Buffer.alloc(24).fill(0);
      });

      it('#1 - Test Vector 2E-2-1 - callback api', (done) => {
        V2.__encrypt('', nk, 'Cuon Alpinus', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNfzz6yGkE4ZxojJAJwKLfvg.Q3VvbiBBbHBpbnVz');
          done();
        });
      });

      it('#1 - Test Vector 2E-2-1 - promise api', (done) => {
        V2.__encrypt('', nk, 'Cuon Alpinus', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNfzz6yGkE4ZxojJAJwKLfvg.Q3VvbiBBbHBpbnVz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#2 - Test Vector 2E-2-2 - callback api', (done) => {
        V2.__encrypt('', fk, 'Cuon Alpinus', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNJbTJxAGtEg4ZMXY9g2LSoQ.Q3VvbiBBbHBpbnVz');
          done();
        });
      });

      it('#2 - Test Vector 2E-2-2 - promise api', (done) => {
        V2.__encrypt('', fk, 'Cuon Alpinus', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNJbTJxAGtEg4ZMXY9g2LSoQ.Q3VvbiBBbHBpbnVz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#3 - Test Vector 2E-2-3 - callback api', (done) => {
        V2.__encrypt('', sk, 'Cuon Alpinus', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNreCcZAS0iGVlzdHjTf2ilg.Q3VvbiBBbHBpbnVz');
          done();
        });
      });

      it('#3 - Test Vector 2E-2-3 - promise api', (done) => {
        V2.__encrypt('', sk, 'Cuon Alpinus', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.driRNhM20GQPvlWfJCepzh6HdijAq-yNreCcZAS0iGVlzdHjTf2ilg.Q3VvbiBBbHBpbnVz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });
    });

    describe('#3', () => {

      before(() => {
        nonce = Buffer.alloc(24).fill(0);
      });

      it('#1 - Test Vector 2E-3-1 - callback api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', nk, '', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.BEsKs5AolRYDb_O-bO-lwHWUextpShFSvu6cB-KuR4wR9uDMjd45cPiOF0zxb7rrtOB5tRcS7dWsFwY4ONEuL5sWeunqHC9jxU0');
          done();
        });
      });

      it('#1 - Test Vector 2E-3-1 - promise api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', nk, '', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.BEsKs5AolRYDb_O-bO-lwHWUextpShFSvu6cB-KuR4wR9uDMjd45cPiOF0zxb7rrtOB5tRcS7dWsFwY4ONEuL5sWeunqHC9jxU0');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#2 - Test Vector 2E-3-2 - callback api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', fk, '', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.BEsKs5AolRYDb_O-bO-lwHWUextpShFSjvSia2-chHyMi4LtHA8yFr1V7iZmKBWqzg5geEyNAAaD6xSEfxoET1xXqahe1jqmmPw');
          done();
        });
      });

      it('#2 - Test Vector 2E-3-2 - promise api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', fk, '', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.BEsKs5AolRYDb_O-bO-lwHWUextpShFSjvSia2-chHyMi4LtHA8yFr1V7iZmKBWqzg5geEyNAAaD6xSEfxoET1xXqahe1jqmmPw');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#3 - Test Vector 2E-3-3 - callback api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', sk, '', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.BEsKs5AolRYDb_O-bO-lwHWUextpShFSXlvv8MsrNZs3vTSnGQG4qRM9ezDl880jFwknSA6JARj2qKhDHnlSHx1GSCizfcF019U');
          done();
        });
      });

      it('#3 - Test Vector 2E-3-3 - promise api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', sk, '', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.BEsKs5AolRYDb_O-bO-lwHWUextpShFSXlvv8MsrNZs3vTSnGQG4qRM9ezDl880jFwknSA6JARj2qKhDHnlSHx1GSCizfcF019U');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });
    });

    describe('#4', () => {

      before(() => {
        nonce = Buffer.from('45742c976d684ff84ebdc0de59809a97cda2f64c84fda19b', 'hex');
      });

      it('#1 - Test Vector 2E-4-1 - callback api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', nk, 'Cuon Alpinus', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.FGVEQLywggpvH0AzKtLXz0QRmGYuC6yvbcqXgWxM3vJGrJ9kWqquP61Xl7bz4ZEqN5XwH7xyzV0QqPIo0k52q5sWxUQ4LMBFFso.Q3VvbiBBbHBpbnVz');
          done();
        });
      });

      it('#1 - Test Vector 2E-4-1 - promise api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', nk, 'Cuon Alpinus', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.FGVEQLywggpvH0AzKtLXz0QRmGYuC6yvbcqXgWxM3vJGrJ9kWqquP61Xl7bz4ZEqN5XwH7xyzV0QqPIo0k52q5sWxUQ4LMBFFso.Q3VvbiBBbHBpbnVz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#2 - Test Vector 2E-4-2 - callback api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', fk, 'Cuon Alpinus', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.FGVEQLywggpvH0AzKtLXz0QRmGYuC6yvZMW3MgUMFplQXsxcNlg2RX8LzFxAqj4qa2FwgrUdH4vYAXtCFrlGiLnk-cHHOWSUSaw.Q3VvbiBBbHBpbnVz');
          done();
        });
      });

      it('#2 - Test Vector 2E-4-2 - promise api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', fk, 'Cuon Alpinus', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.FGVEQLywggpvH0AzKtLXz0QRmGYuC6yvZMW3MgUMFplQXsxcNlg2RX8LzFxAqj4qa2FwgrUdH4vYAXtCFrlGiLnk-cHHOWSUSaw.Q3VvbiBBbHBpbnVz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });

      it('#3 - Test Vector 2E-4-3 - callback api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', sk, 'Cuon Alpinus', nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.FGVEQLywggpvH0AzKtLXz0QRmGYuC6yvl05z9GIX0cnol6UK94cfV77AXnShlUcNgpDR12FrQiurS8jxBRmvoIKmeMWC5wY9Y6w.Q3VvbiBBbHBpbnVz');
          done();
        });
      });

      it('#3 - Test Vector 2E-4-3 - promise api', (done) => {
        V2.__encrypt('Love is stronger than hate or fear', sk, 'Cuon Alpinus', nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.FGVEQLywggpvH0AzKtLXz0QRmGYuC6yvl05z9GIX0cnol6UK94cfV77AXnShlUcNgpDR12FrQiurS8jxBRmvoIKmeMWC5wY9Y6w.Q3VvbiBBbHBpbnVz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });
    });

    describe('json test', () => {

      let message, footer;

      before(() => {
        nonce   = Buffer.from('45742c976d684ff84ebdc0de59809a97cda2f64c84fda19b', 'hex');
        message = JSON.stringify({ data: 'this is a signed message', expires: '2019-01-01T00:00:00+00:00' });
        footer  = 'Paragon Initiative Enterprises';
      });

      it('callback api', (done) => {
        V2.__encrypt(message, sk, footer, nonce, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.local.lClhzVOuseCWYep44qbA8rmXry66lUupyENijX37_I_z34EiOlfyuwqIIhOjF-e9m2J-Qs17Gs-BpjpLlh3zf-J37n7YGHqMBV6G5xD2aeIKpck6rhfwHpGF38L7ryYuzuUeqmPg8XozSfU4PuPp9o8.UGFyYWdvbiBJbml0aWF0aXZlIEVudGVycHJpc2Vz');
          done();
        });
      });

      it('promise api', (done) => {
        V2.__encrypt(message, sk, footer, nonce)
          .then((token) => {
            assert.equal(token, 'v2.local.lClhzVOuseCWYep44qbA8rmXry66lUupyENijX37_I_z34EiOlfyuwqIIhOjF-e9m2J-Qs17Gs-BpjpLlh3zf-J37n7YGHqMBV6G5xD2aeIKpck6rhfwHpGF38L7ryYuzuUeqmPg8XozSfU4PuPp9o8.UGFyYWdvbiBJbml0aWF0aXZlIEVudGVycHJpc2Vz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });
    });
  });

  describe('#2S - signing', () => {

    let sk, pk;

    before(() => {
      const AsymmetricSecretKeyV2 = Paseto.AsymmetricSecretKey.V2;
      const AsymmetricPublicKeyV2 = Paseto.AsymmetricPublicKey.V2;

      sk = new AsymmetricSecretKeyV2(Buffer.from('b4cbfb43df4ce210727d953e4a713307fa19bb7d9f85041438d9e11b942a37741eb9dbbbbc047c03fd70604e0071f0987e16b28b757225c11f00415d0e20b1a2', 'hex'));
      pk = new AsymmetricPublicKeyV2(Buffer.from('1eb9dbbbbc047c03fd70604e0071f0987e16b28b757225c11f00415d0e20b1a2', 'hex'));
    });

    it('#1 - Test Vector 2S-1 - callback api', (done) => {
      V2.sign('', sk, '', (err, token) => {
        if (err) { return done(err); }

        assert.equal(token, 'v2.public.xnHHprS7sEyjP5vWpOvHjAP2f0HER7SWfPuehZ8QIctJRPTrlZLtRCk9_iNdugsrqJoGaO4k9cDBq3TOXu24AA');
        done();
      });
    });

    it('#1 - Test Vector 2S-1 - promise api', (done) => {
      V2.sign('', sk, '')
        .then((token) => {
          assert.equal(token, 'v2.public.xnHHprS7sEyjP5vWpOvHjAP2f0HER7SWfPuehZ8QIctJRPTrlZLtRCk9_iNdugsrqJoGaO4k9cDBq3TOXu24AA');
          done();
        })
        .catch((err) => {
          return done(err);
        });
    });

    it('#2 - Test Vector 2S-2 - callback api', (done) => {
      V2.sign('', sk, 'Cuon Alpinus', (err, token) => {
        if (err) { return done(err); }

        assert.equal(token, 'v2.public.Qf-w0RdU2SDGW_awMwbfC0Alf_nd3ibUdY3HigzU7tn_4MPMYIKAJk_J_yKYltxrGlxEdrWIqyfjW81njtRyDw.Q3VvbiBBbHBpbnVz');
        done();
      });
    });

    it('#2 - Test Vector 2S-2 - promise api', (done) => {
      V2.sign('', sk, 'Cuon Alpinus')
        .then((token) => {
          assert.equal(token, 'v2.public.Qf-w0RdU2SDGW_awMwbfC0Alf_nd3ibUdY3HigzU7tn_4MPMYIKAJk_J_yKYltxrGlxEdrWIqyfjW81njtRyDw.Q3VvbiBBbHBpbnVz');
          done();
        })
        .catch((err) => {
          return done(err);
        });
    });

    it('#3 - Test Vector 2S-3 - callback api', (done) => {
      V2.sign('Frank Denis rocks', sk, '', (err, token) => {
        if (err) { return done(err); }

        assert.equal(token, 'v2.public.RnJhbmsgRGVuaXMgcm9ja3NBeHgns4TLYAoyD1OPHww0qfxHdTdzkKcyaE4_fBF2WuY1JNRW_yI8qRhZmNTaO19zRhki6YWRaKKlCZNCNrQM');
        done();
      });
    });

    it('#3 - Test Vector 2S-3 - promise api', (done) => {
      V2.sign('Frank Denis rocks', sk, '')
        .then((token) => {
          assert.equal(token, 'v2.public.RnJhbmsgRGVuaXMgcm9ja3NBeHgns4TLYAoyD1OPHww0qfxHdTdzkKcyaE4_fBF2WuY1JNRW_yI8qRhZmNTaO19zRhki6YWRaKKlCZNCNrQM');
          done();
        })
        .catch((err) => {
          return done(err);
        });
    });

    it('#4 - Test Vector 2S-4 - callback api', (done) => {
      V2.sign('Frank Denis rockz', sk, '', (err, token) => {
        if (err) { return done(err); }

        assert.equal(token, 'v2.public.RnJhbmsgRGVuaXMgcm9ja3qIOKf8zCok6-B5cmV3NmGJCD6y3J8fmbFY9KHau6-e9qUICrGlWX8zLo-EqzBFIT36WovQvbQZq4j6DcVfKCML');
        done();
      });
    });

    it('#4 - Test Vector 2S-4 - promise api', (done) => {
      V2.sign('Frank Denis rockz', sk, '')
        .then((token) => {
          assert.equal(token, 'v2.public.RnJhbmsgRGVuaXMgcm9ja3qIOKf8zCok6-B5cmV3NmGJCD6y3J8fmbFY9KHau6-e9qUICrGlWX8zLo-EqzBFIT36WovQvbQZq4j6DcVfKCML');
          done();
        })
        .catch((err) => {
          return done(err);
        });
    });

    it('#5 - Test Vector 2S-5 - callback api', (done) => {
      V2.sign('Frank Denis rocks', sk, 'Cuon Alpinus', (err, token) => {
        if (err) { return done(err); }

        assert.equal(token, 'v2.public.RnJhbmsgRGVuaXMgcm9ja3O7MPuu90WKNyvBUUhAGFmi4PiPOr2bN2ytUSU-QWlj8eNefki2MubssfN1b8figynnY0WusRPwIQ-o0HSZOS0F.Q3VvbiBBbHBpbnVz');
        done();
      });
    });

    it('#5 - Test Vector 2S-5 - promise api', (done) => {
      V2.sign('Frank Denis rocks', sk, 'Cuon Alpinus')
        .then((token) => {
          assert.equal(token, 'v2.public.RnJhbmsgRGVuaXMgcm9ja3O7MPuu90WKNyvBUUhAGFmi4PiPOr2bN2ytUSU-QWlj8eNefki2MubssfN1b8figynnY0WusRPwIQ-o0HSZOS0F.Q3VvbiBBbHBpbnVz');
          done();
        })
        .catch((err) => {
          return done(err);
        });
    });

    describe('json test', () => {

      let message, footer;

      before(() => {
        message = JSON.stringify({ data: 'this is a signed message', expires: '2019-01-01T00:00:00+00:00' });
        footer  = 'Paragon Initiative Enterprises';
      });

      it('callback api', (done) => {
        V2.sign(message, sk, footer, (err, token) => {
          if (err) { return done(err); }

          assert.equal(token, 'v2.public.eyJkYXRhIjoidGhpcyBpcyBhIHNpZ25lZCBtZXNzYWdlIiwiZXhwaXJlcyI6IjIwMTktMDEtMDFUMDA6MDA6MDArMDA6MDAifcMYjoUaEYXAtzTDwlcOlxdcZWIZp8qZga3jFS8JwdEjEvurZhs6AmTU3bRW5pB9fOQwm43rzmibZXcAkQ4AzQs.UGFyYWdvbiBJbml0aWF0aXZlIEVudGVycHJpc2Vz');
          done();
        });
      });

      it('promise api', (done) => {
        V2.sign(message, sk, footer)
          .then((token) => {
            assert.equal(token, 'v2.public.eyJkYXRhIjoidGhpcyBpcyBhIHNpZ25lZCBtZXNzYWdlIiwiZXhwaXJlcyI6IjIwMTktMDEtMDFUMDA6MDA6MDArMDA6MDAifcMYjoUaEYXAtzTDwlcOlxdcZWIZp8qZga3jFS8JwdEjEvurZhs6AmTU3bRW5pB9fOQwm43rzmibZXcAkQ4AzQs.UGFyYWdvbiBJbml0aWF0aXZlIEVudGVycHJpc2Vz');
            done();
          })
          .catch((err) => {
            return done(err);
          });
      });
    });
  });
});
